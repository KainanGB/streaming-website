import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #dcdcdc;
  padding: 30px;

  & input {
    padding: 10px;
    font-size: 18px;
    margin-bottom: 10px;
  }
`;
export const UserInput = styled.input.attrs({
  type: "text",
  name: "name",
})``;
export const EmailInput = styled.input.attrs({
  type: "text",
  name: "email",
})``;

export const PasswordInput = styled.input.attrs({
  type: "password",
  name: "password",
})``;

export const SubmitButton = styled.button`
  padding: 10px;
  font-size: 18px;
  margin-bottom: 10px;
  border: none;
  color: white;
  background-color: black;
`;
export const GoogleLogin = styled.a``;
export const LoginNavigate = styled.div``;
