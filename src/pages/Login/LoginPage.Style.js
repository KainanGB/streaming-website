import styled from "styled-components";
import * as pallete from "../../global/variables";

export const Background = styled.div`
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  color: ${pallete.primaryClrWhite};

  & input,
  button {
    margin: 0.5em 0;
    width: 100%;
    color: ${pallete.primaryClrWhite};
  }

  & input {
    padding: 0.3em 0.5em;
    border: none;
    border: 1px solid #21242d;
    background-color: #21242d;

    /* Cor do background do google */
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px #21242d inset;
    }

    /* Cor do texto do autocomplete */
    &:-webkit-autofill {
      -webkit-text-fill-color: ${pallete.primaryClrWhite} !important;
    }

    padding: 0.8em;

    :focus {
      outline: none !important;
      border: 1px solid white;
    }
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 100%;
  padding: 2em;
  background: #252933;

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
})``;

export const FormTextInput = styled.input.attrs({
  type: "text",
  name: "email",
})``;

export const FormPasswordInput = styled.input.attrs({
  type: "password",
  name: "password",
})`
  background: #21242d;
  margin-top: 0.25rem !important;
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
  border-width: 1px;
  font-weight: bold;
  border-radius: 3px;
  width: 100%;

  transition: 1s background-color;

  :hover {
    background: ${pallete.buttonHover}!important;
  }
`;

export const GoogleSubmitButton = styled.a`
  display: flex;
  align-items: center;

  background-color: #21242d;
  border: none;
  cursor: pointer;

  padding: 1em;
  border-radius: 1em;
  margin: 0.5em 0;

  transition: background-color 1s;

  &:hover {
    background: ${pallete.buttonHover};
  }
`;

export const RegisterLink = styled.p``;
