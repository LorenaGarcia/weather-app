import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  @media (max-width: 480px) {
  }
`;

const Close = styled.div`
  text-align: right;
  padding: 2rem;
  padding-top: 1rem;
  padding-bottom: 0;
  padding-right: 1rem;
  cursor: pointer;
`;

const Form = styled.div`
  text-align: center;
  padding: 1rem;
`;

const ContainerInputs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  width: 30%;
  height: 48px;
  left: 327px;
  top: 82px;
  background: #3c47e9;
  border: 0;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #e7e7eb;
  cursor: pointer;
`;

const Input = styled.input`
  width: 65%;
  padding-left: 2.2rem;
  height: 48px;
  background: transparent;
  border: 1px solid #e7e7eb;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #616475;

  :focus-visible {
    outline: none;
  }
`;

const InputResult = styled.input`
  width: 100%;
  padding-left: 2.2rem;
  height: 48px;
  background: transparent;
  border: 1px solid #616475;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #616475;
  cursor: pointer;

  :focus-visible {
    outline: none;
  }
`;

const Icon = styled.div`
  position: absolute;
  padding-left: 0.5rem;
`;

const IconResult = styled.div`
  left: 26%;
  position: absolute;
  color: #828282;

  @media (max-width: 480px) {
    right: 1.5rem;
    left: 80%;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    left: 30%;
  }
`;

const ContainerInputResult = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export {
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
};
