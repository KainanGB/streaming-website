import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import * as S from "./LoginPage.Style";
import amazonLogo from "../../assets/amazon_logo-black.svg";

export const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <S.Container>
      <S.Logo src={amazonLogo} />
      <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
        <S.FormTitle>Fazer Login</S.FormTitle>
        <S.FormTextInput
          {...register("name", { required: "this is required" })}
        />
        <S.FormDiv>
          <S.FormText>Senha</S.FormText>
          <S.FormText>Esqueci a senha</S.FormText>
        </S.FormDiv>
        <S.FormPasswordInput
          {...register("password", {
            required: "this is required",
            minLength: { value: 4, message: "Mínimo de 4 letras." },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <S.SubmitButton />
      </S.LoginForm>
    </S.Container>
  );
};
