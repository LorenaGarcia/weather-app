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
} from "../Hightlights/Hightlights.styles";

const Hightlights = () => {
  return (
    <Container>
      <TitleSection>Today’s Hightlights</TitleSection>
      <ContainerGrid>
        <Card>
          <Title>Wind status</Title>
          <Number>
            7 <p>mph</p>
          </Number>
          <Description>
            <ButtonIcon>
              <span class="material-icons">near_me</span>
            </ButtonIcon>
            WSW
          </Description>
        </Card>

        <Card>
          <Title>Humidity</Title>
          <Number>
            84 <p>%</p>
          </Number>
          <Description>
            <ButtonIcon>
              <span class="material-icons">near_me</span>
            </ButtonIcon>
            WSW
          </Description>
        </Card>

        <Card>
          <Title>Visibility</Title>
          <Number>
            6,4 <p>miles</p>
          </Number>
        </Card>

        <Card>
          <Title>Air Pressure</Title>
          <Number>
            998 <p>mb</p>
          </Number>
        </Card>
      </ContainerGrid>
    </Container>
  );
};

export { Hightlights };
