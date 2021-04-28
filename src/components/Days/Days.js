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
import IconWeather from "../../images/clear.png";

const Days = () => {
  return (
    <Container>
      <Options>
        <ButtonC>℃</ButtonC>
        <ButtonF>℉</ButtonF>
      </Options>
      <ContainerGrid>
        <Weather>
          <Title>Tomorrow</Title>
          <div>
            <Image src={IconWeather} />
          </div>
          <Temperature>
            <TempLeft>16°C</TempLeft>
            <TempRight>11°C</TempRight>
          </Temperature>
        </Weather>

        <Weather>
          <Title>Tomorrow</Title>
          <div>
            <Image src={IconWeather} />
          </div>
          <Temperature>
            <TempLeft>16°C</TempLeft>
            <TempRight>11°C</TempRight>
          </Temperature>
        </Weather>

        <Weather>
          <Title>Tomorrow</Title>
          <div>
            <Image src={IconWeather} />
          </div>
          <Temperature>
            <TempLeft>16°C</TempLeft>
            <TempRight>11°C</TempRight>
          </Temperature>
        </Weather>

        <Weather>
          <Title>Tomorrow</Title>
          <div>
            <Image src={IconWeather} />
          </div>
          <Temperature>
            <TempLeft>16°C</TempLeft>
            <TempRight>11°C</TempRight>
          </Temperature>
        </Weather>

        <Weather>
          <Title>Tomorrow</Title>
          <div>
            <Image src={IconWeather} />
          </div>
          <Temperature>
            <TempLeft>16°C</TempLeft>
            <TempRight>11°C</TempRight>
          </Temperature>
        </Weather>
      </ContainerGrid>
    </Container>
  );
};

export { Days };
