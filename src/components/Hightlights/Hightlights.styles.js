import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  @media (max-width: 480px) {
  }
`;

const ContainerGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
`;

const Card = styled.div`
  background: #1e213a;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  font-family: "Raleway", sans-serif;
  font-style: normal;
  text-align: center;
  color: #e7e7eb;
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  margin: 0;
`;

const Number = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  text-align: center;
  margin: 0;
  margin-bottom: 2rem;
  margin-top: 1rem;

  p {
    font-size: 40px;
    margin: 0;
    margin-top: 0.9rem;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
`;

const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 29.49px;
  height: 29.49px;
  left: 760.54px;
  top: 636.29px;
  border-radius: 20px;
  border: 0;
  background: rgba(255, 255, 255, 0.3);
  margin-right: 0.5rem;

  span {
    text-align: center;
    font-size: 15px;
    color: #e7e7eb;
    transform: rotate(-200deg);
  }
`;

const TitleSection = styled.div`
  font-family: "Raleway", sans-serif;
  text-align: left;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #e7e7eb;
  margin-top: 4rem;
  margin-bottom: 2rem;
`;

export {
  Container,
  ContainerGrid,
  Card,
  Title,
  Number,
  Description,
  ButtonIcon,
  TitleSection,
};
