import React from "react";
import {
  Container,
  Options,
  ButtonC,
  ButtonF,
  Weather,
  Temperature,
  Image,
  ContainerGrid,
  Title,
  TempLeft,
  TempRight,
} from "./Days.styles";

const Days = ({
  data,
  isLoading,
  imagesWeather,
  setFarenheit,
  farenheit,
  conversion,
}) => {
  function moreDays(days) {
    const today = new window.Date();
    var options = {
      weekday: "short",
      day: "numeric",
      month: "short",
    };

    if (days === 1) {
      return "Tomorrow";
    } else {
      today.setDate(today.getDate() + days);
      return today.toLocaleDateString("en-EN", options);
    }
  }

  return (
    <Container>
      <Options>
        <ButtonC onClick={() => setFarenheit(false)}>℃</ButtonC>
        <ButtonF onClick={() => setFarenheit(true)}>℉</ButtonF>
      </Options>

      {!isLoading && data.title && (
        <ContainerGrid>
          {data.consolidated_weather.map(
            (value, index) =>
              data.consolidated_weather[0].id !== value.id && (
                <Weather key={index}>
                  <Title>{moreDays(index)}</Title>
                  <div>
                    <Image src={imagesWeather(value.weather_state_abbr)} />
                  </div>
                  <Temperature>
                    {farenheit ? (
                      <TempLeft>
                        {parseInt(conversion(value.max_temp))} ℉
                      </TempLeft>
                    ) : (
                      <TempLeft>{parseInt(value.max_temp)}°C</TempLeft>
                    )}

                    {farenheit ? (
                      <TempRight>
                        {parseInt(conversion(value.min_temp))} ℉
                      </TempRight>
                    ) : (
                      <TempRight>{parseInt(value.min_temp)}°C</TempRight>
                    )}
                  </Temperature>
                </Weather>
              )
          )}
        </ContainerGrid>
      )}
    </Container>
  );
};

export { Days };
