import styled from "styled-components";
import background from "../../images/clouds.png";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.div`
  position: relative;
  height: 100%;
  max-height: 20rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ::before {
    content: "";
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.1;
  }
`;

const ContainerSearch = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;

const ButtonSearch = styled.button`
  width: 161px;
  height: 40px;
  left: 46px;
  top: 42px;
  background: #6e707a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 0;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #e7e7eb;
  margin: 1rem;
  cursor: pointer;
`;

const ButtonLocation = styled.button`
  width: 40px;
  border-radius: 20px;
  margin: 1rem;
  border: none;
  height: 40px;
  left: 373px;
  top: 42px;
  background: #6e707a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  color: #e7e7eb;
`;

const ImageWeather = styled.img`
  width: 40%;
  max-width: 200px;
  padding: 4rem;

  @media (max-width: 480px) {
    padding: 6rem;
  }
`;

const Information = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 4rem;

  @media (min-width: 481px) and (max-width: 950px) {
    margin-top: 15rem;
    margin-bottom: 15rem;
  }
`;

const Weather = styled.p`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 100px;
  margin: 0;
  color: #e7e7eb;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 80px;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    font-size: 90px;
  }
`;

const Description = styled.div`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  text-align: center;
  color: #a09fb1;
  margin-bottom: 2rem;
`;

const Place = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Date = styled.p`
  margin: 0;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #88869d;
  margin-bottom: 2rem;
`;

export {
  Container,
  Image,
  ContainerSearch,
  ButtonSearch,
  ButtonLocation,
  ImageWeather,
  Information,
  Weather,
  Description,
  Place,
  Date,
};
