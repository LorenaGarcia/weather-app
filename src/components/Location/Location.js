import React from "react";
import {
  Container,
  Image,
  ContainerSearch,
  ButtonSearch,
  ButtonLocation,
  ImageWeather,
  Information,
  Weather,
  Description,
  Place,
  Date,
} from "./Location.styles";
import { Spinner } from "../Spinner";

const Location = ({
  showSearch,
  setShowSearch,
  data,
  isLoading,
  imagesWeather,
  today,
  getLocation,
}) => {
  function sumarDias(fecha, dias) {
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }

  var dayyy = new window.Date();

  console.log("days", sumarDias(dayyy, +5));

  return (
    <Container>
      <ContainerSearch>
        <ButtonSearch onClick={() => setShowSearch(!showSearch)}>
          Search for places
        </ButtonSearch>
        <ButtonLocation onClick={getLocation}>
          <span className="material-icons">my_location</span>
        </ButtonLocation>
      </ContainerSearch>

      {isLoading || !data.title ? (
        <Spinner />
      ) : (
        data.title && (
          <>
            <Image>
              <ImageWeather
                src={
                  data.title &&
                  imagesWeather(data.consolidated_weather[0].weather_state_abbr)
                }
                alt="weather"
              />
            </Image>
            <Information>
              <Weather>
                {data.consolidated_weather &&
                  parseInt(data.consolidated_weather[0].the_temp)}
                ℃
              </Weather>
              <Description>
                {data.consolidated_weather[0].weather_state_name}
              </Description>
              <div>
                <Date>{today}</Date>
                <Place>
                  <span className="material-icons">place</span>
                  <p>{data.title}</p>
                </Place>
              </div>
            </Information>
          </>
        )
      )}
    </Container>
  );
};

export { Location };
