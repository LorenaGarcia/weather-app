import React from "react";
import { Container } from "./Spinner.styles";
import spinner from "../../images/spinner.gif";

const Spinner = () => {
  return (
    <Container>
      <img src={spinner} alt="spinner" />
    </Container>
  );
};

export { Spinner };
