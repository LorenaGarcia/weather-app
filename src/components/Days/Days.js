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
import IconWeather from "../../images/lightCloud.png";
import { Spinner } from "../Spinner";

const Days = ({ data, isLoading }) => {
  return (
    <Container>
      <Options>
        <ButtonC>℃</ButtonC>
        <ButtonF>℉</ButtonF>
      </Options>

      {isLoading ? (
        <Spinner />
      ) : (
        data.title && (
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
              <Title>Sun, 7 Jun</Title>
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
        )
      )}
    </Container>
  );
};

export { Days };
