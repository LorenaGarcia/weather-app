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
`;

const Select = styled.select`
  width: 100%;
  height: 64px;
  margin-top: 2rem;
  background: transparent;
  color: #e7e7eb;
  border: 1px solid #e7e7eb;
  box-sizing: border-box;
`;

const Icon = styled.div`
  position: absolute;
  padding-left: 0.5rem;
`;

export { Container, Close, Form, ContainerInputs, Button, Input, Select, Icon };
