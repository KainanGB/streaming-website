import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import amazonLogo from "../../assets/amazon_logo-black.svg";
import * as S from "./Register.Style";
import { FaGoogle } from "react-icons/fa";

export function Register() {
  const [formError, setFormError] = useState("");

  const {
    user,
    loading,
    error,
    fetchUserName,
    createUserWithEmail,
    signInWithGoogle,
  } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    criterialMode: "all",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading]);

  //const handleRegister = () => {
  //  if (!userName) alert("Please enter name");
  //  createUserWithEmail(userName, email, password);
  //};

  const onSubmit = ({ name, email, password }) => {
    createUserWithEmail(name, email, password);
  };

  const onError = (err, e) => {
    toast.error(err.name?.message);
    toast.error(err.email?.message);
    toast.error(err.password?.message);
  };

  return (
    <S.Container>
      <S.Logo src={amazonLogo} />

      <S.RegisterForm onSubmit={handleSubmit(onSubmit, onError)}>
        <S.FormTitle>Criar conta</S.FormTitle>
        <S.UserInput
          placeholder="Nome Completo"
          {...register("name", {
            required: "Informe o nome completo",
            minLength: {
              value: 2,
              message: "Informe o nome completo",
            },
          })}
        />

        <S.EmailInput
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Endereço de email inválido",
            },
          })}
        />

        <S.PasswordInput
          placeholder="Senha"
          {...register("password", {
            required: true,
          })}
        />
        <S.SubmitButton>Registrar</S.SubmitButton>
        <S.GoogleLogin onClick={signInWithGoogle}>
          <FaGoogle />
          <S.FormText>Sign in with Google</S.FormText>
        </S.GoogleLogin>
        <S.LoginNavigate>
          Você já tem uma conta? <Link to="/login">Fazer login</Link>
        </S.LoginNavigate>
      </S.RegisterForm>
    </S.Container>
  );
}
