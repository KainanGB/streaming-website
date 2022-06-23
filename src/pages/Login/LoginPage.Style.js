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
  align-items: center;

  border: 1px solid ${pallete.darkGrey};
  border-radius: 0.5rem;

  position: relative;
`;

export const FormTitle = styled.h1`
  margin-bottom: 0.5rem;
  width: 100%;
`;

export const FormNameInput = styled.input.attrs({
  type: "text",
  name: "name",
})`
  width: 100%;
`;

export const FormTextInput = styled.input.attrs({
  type: "text",
  name: "email",
})`
  width: 100%;
`;

export const FormPasswordInput = styled.input.attrs({
  type: "password",
  name: "password",
})`
  margin-top: 0.25rem !important;
  width: 100%;
`;

export const FormDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.7rem;
  width: 100%;
`;

export const FormText = styled.p`
  font-weight: bold;
  padding: 0;
  width: 100%;

  &:last-child {
    text-align: right;
  }
`;

export const FormForgotPassword = styled.a`
  width: 100%;
`;

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
  width: 100%;
`;

export const Logo = styled.img`
  width: 10rem;
  padding: 1em 0;

  cursor: pointer;
`;

export const GoogleSubmitButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  padding: 0.5em;

  cursor: pointer;

  color: ${pallete.primaryClrWhite};
  background: #4285f4;

  border-radius: 0.15rem;
  svg {
    width: 2rem;
  }
`;

export const RegisterLink = styled.p`
  text-align: right;
`;
