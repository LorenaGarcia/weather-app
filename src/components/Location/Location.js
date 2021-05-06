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
import { Message } from "../Message";

const Location = ({
  showSearch,
  setShowSearch,
  data,
  isLoading,
  imagesWeather,
  today,
  getLocation,
  farenheit,
  conversion,
  message,
}) => {
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
      {message && <Message message={message} />}

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
                {farenheit
                  ? parseInt(conversion(data.consolidated_weather[0].the_temp))
                  : parseInt(data.consolidated_weather[0].the_temp)}
                {farenheit ? <p>{"℉"}</p> : <p>{"℃"}</p>}
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
