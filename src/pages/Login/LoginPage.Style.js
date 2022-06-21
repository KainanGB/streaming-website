import styled from "styled-components";
import * as pallete from "../../global/variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  background-color: #fff;
  color: #000;

  & input,
  button {
    margin: 0.5em 0;
  }

  & input {
    padding: 0.3em 0;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  padding: 2em;

  border: 1px solid ${pallete.darkGrey};
  border-radius: 0.5rem;

  position: relative;
`;

export const FormTitle = styled.h1`
  margin-bottom: 0.5rem;
`;

export const FormTextInput = styled.input.attrs({
  type: "text",
  name: "name",
})``;

export const FormPasswordInput = styled.input.attrs({
  type: "password",
  name: "password",
})`
  margin-top: 0.25rem !important;
`;

export const FormDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.7rem;
`;

export const FormText = styled.p`
  font-weight: bold;
  padding: 0;
`;

export const FormForgotPassword = styled.a``;

export const SubmitButton = styled.input.attrs({
  type: "submit",
  value: "Fazer login",
})`
  padding: 0.5em;
  background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
  border-width: 1px;
  border-color: #a88734 #9c7e31 #846a29;
  color: ${pallete.primaryClrBlack};
  font-weight: bold;
  border-radius: 3px;
`;

export const Logo = styled.img`
  width: 10rem;
  padding: 1em 0;

  cursor: pointer;
`;
