import React from "react";
import {
  Container,
  Close,
  Form,
  ContainerInputs,
  Button,
  Input,
  InputResult,
  Icon,
  IconResult,
  ContainerInputResult,
} from "./Search.styles";
import { Message } from "../Message";

const Search = ({
  setShowSearch,
  searchCity,
  city,
  setCity,
  resultsSearch,
  currentLocation,
  message,
}) => {
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

          <Input
            onChange={(e) => setCity(e.target.value)}
            defaultValue={city}
            placeholder="search location"
          />
          <Button onClick={searchCity}>Search</Button>
        </ContainerInputs>
        {resultsSearch.length >= 1 &&
          resultsSearch.map((value, index) => (
            <ContainerInputResult
              key={index}
              onClick={() => currentLocation(value.woeid)}
            >
              <IconResult>
                <span className="material-icons">chevron_right</span>
              </IconResult>
              <InputResult value={value.title} disabled />
            </ContainerInputResult>
          ))}
      </Form>
      {message && <Message message={message} />}
    </Container>
  );
};

export { Search };
