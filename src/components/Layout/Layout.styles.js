import styled from "styled-components";

const Container = styled.div`
  display: grid;
  height: 100vh;
  color: #a09fb1;
  grid-template-rows: 1fr 1fr auto;
  grid-template-columns: 30% 1fr;
  grid-template-areas:
    "location days"
    "location wheater"
    "location footer";

  @media (max-width: 480px) {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      "location"
      "days"
      "wheater"
      "footer";
  }

  @media (min-width: 481px) and (max-width: 950px) {
    grid-template-rows: 1fr 1fr auto;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "location days"
      "location wheater"
      "location footer";
  }
`;

const LocationContainer = styled.div`
  grid-area: location;
  background-color: #1e213a;
`;

const DaysContainer = styled.div`
  grid-area: days;
  background-color: #100e1d;
  padding: 1.5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;

  @media (max-width: 480px) {
    padding: 1rem;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    padding: 1.5rem;
  }
`;

const Wheater = styled.div`
  grid-area: wheater;
  background-color: #100e1d;
  padding: 1.5rem;
  padding-top: 0;
  padding-bottom: 2rem;
  text-align: center;

  @media (max-width: 480px) {
    padding: 1rem;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    padding: 1.5rem;
  }
`;

const Footer = styled.div`
  grid-area: footer;
  background-color: #100e1d;
  padding: 3rem;
  padding-top: 0;
  padding-bottom: 1rem;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #a09fb1;
  padding-top: 4rem;
`;

export { Container, LocationContainer, DaysContainer, Wheater, Footer };
