import styled from "styled-components";
import { Form } from "formik";

export const ContainerAccount = styled.div`
  min-height: calc(100vh - 80px);
  height: auto;
  padding: 1rem;

  @media (max-width: 800px) {
    width: 100%;
    padding: 10px 0px;
  }
`;

export const ContainerAccountTitle = styled.div`
  max-width: 1300px;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: var(--rojo);
    color: var(--blanco);
    font-size: 1rem;
    padding: 5px 20px;
    &:hover {
      background-color: var(--rojo);
    }
  }

  input {
    padding: 5px 20px;
    border-radius: 10px;
    border-color: var(--amarilloOscuro);
  }

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const ContainerVerify = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const ErrorStyled = styled.span`
  font-size: 0.6rem;
  color: red;
`;
