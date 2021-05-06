import React from "react";
import { Container } from "./Message.styles";

const Message = ({ message }) => {
  return (
    <Container>
      <p>{message}</p>
    </Container>
  );
};

export { Message };
