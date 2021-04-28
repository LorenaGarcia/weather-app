import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  @media (max-width: 480px) {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`;

const Options = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 3rem;
`;

const ButtonC = styled.button`
  width: 40px;
  height: 40px;
  left: 1223px;
  top: 42px;
  background: #e7e7eb;
  border-radius: 54px;
  border: 0;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #110e3c;
  margin-right: 2rem;
  cursor: pointer;
`;

const ButtonF = styled.button`
  width: 40px;
  height: 40px;
  left: 1223px;
  top: 42px;
  background: #585676;
  border-radius: 54px;
  border: 0;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #e7e7eb;
  cursor: pointer;
`;

const Weather = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #1e213a;
  padding: 1rem 2rem;
`;

const Temperature = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

const Image = styled.img`
  width: 5rem;
`;

const Title = styled.p`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #e7e7eb;
  margin: 0;
  margin-bottom: 1rem;
`;

const ContainerGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const TempLeft = styled.div`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #e7e7eb;
`;

const TempRight = styled.div`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #a09fb1;
`;

export {
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
};
