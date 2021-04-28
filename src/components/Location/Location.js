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
import IconWeather from "../../images/clear.png";

const Location = () => {
  return (
    <Container>
      <ContainerSearch>
        <ButtonSearch>Search for places</ButtonSearch>
        <ButtonLocation>
          <span class="material-icons">my_location</span>
        </ButtonLocation>
      </ContainerSearch>

      <Image>
        <ImageWeather src={IconWeather} alt="weather" />
      </Image>
      <Information>
        <Weather>15℃</Weather>
        <Description>Shower</Description>
        <Date>Today - Fri, 5 Jun</Date>
        <Place>
          <span class="material-icons">place</span>Helsinki
        </Place>
      </Information>
    </Container>
  );
};

export { Location };
