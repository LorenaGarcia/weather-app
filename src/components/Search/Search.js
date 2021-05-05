import React from "react";
import {
  Container,
  Close,
  Form,
  ContainerInputs,
  Button,
  Input,
  Select,
  Icon,
} from "./Search.styles";

const Search = ({ setShowSearch }) => {
  return (
    <Container>
      <Close onClick={() => setShowSearch(false)}>
        <span className="material-icons">close</span>
      </Close>
      <Form>
        <ContainerInputs>
          <Icon>
            <span className="material-icons">search</span>
          </Icon>

          <Input placeholder="search location" />
          <Button>Search</Button>
        </ContainerInputs>

        <Select name="select">
          <option value="value1">Value 1</option>
          <option value="value2" selected>
            Value 2
          </option>
          <option value="value3">Value 3</option>
        </Select>
      </Form>
    </Container>
  );
};

export { Search };
