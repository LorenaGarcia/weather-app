import React from "react";
import {
  Container,
  ContainerGrid,
  Card,
  Title,
  Number,
  Description,
  ButtonIcon,
  TitleSection,
  ContainerProgress,
  NumbersProgress,
  Percent,
} from "../Hightlights/Hightlights.styles";

const Hightlights = ({ data, isLoading }) => {
  return (
    <Container>
      {!isLoading && data.title && (
        <>
          <TitleSection>Today’s Hightlights</TitleSection>
          <ContainerGrid>
            <Card>
              <Title>Wind status</Title>
              <Number>
                {parseInt(data.consolidated_weather[0].wind_speed)} <p>mph</p>
              </Number>
              <Description>
                <ButtonIcon>
                  <span className="material-icons">near_me</span>
                </ButtonIcon>
                WSW
              </Description>
            </Card>

            <Card>
              <Title>Humidity</Title>
              <Number>
                {data.consolidated_weather[0].humidity} <p>%</p>
              </Number>
              <ContainerProgress>
                <NumbersProgress>
                  <p>0</p> <p>50</p>
                  <p>100</p>
                </NumbersProgress>
                <progress
                  value={data.consolidated_weather[0].humidity}
                  max="100"
                />
                <Percent>%</Percent>
              </ContainerProgress>
            </Card>

            <Card>
              <Title>Visibility</Title>
              <Number>
                {parseInt(data.consolidated_weather[0].visibility)} <p>miles</p>
              </Number>
            </Card>

            <Card>
              <Title>Air Pressure</Title>
              <Number>
                {parseInt(data.consolidated_weather[0].air_pressure)} <p>mb</p>
              </Number>
            </Card>
          </ContainerGrid>
        </>
      )}
    </Container>
  );
};

export { Hightlights };
