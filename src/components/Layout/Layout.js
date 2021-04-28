import React from "react";
import {
  Container,
  LocationContainer,
  DaysContainer,
  Wheater,
  Footer,
} from "./Layout.styles";
import { Location } from "../Location/Location";
import { Days } from "../Days/Days";

const Layout = ({ children }) => {
  return (
    <Container>
      <LocationContainer>
        <Location />
      </LocationContainer>
      <DaysContainer>
        <Days />
      </DaysContainer>
      <Wheater></Wheater>
      <Footer>created by Lorraine </Footer>
    </Container>
  );
};

export { Layout };
