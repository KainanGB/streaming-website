import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import backgroundImage from "../../assets/aincrad.jpg";
import { FcGoogle } from "react-icons/fc";

import * as S from "./Register.Style";

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
    <S.Background background={backgroundImage}>
      <S.Container>
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
                message: "Endere??o de email inv??lido",
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
          <S.LoginNavigate>
            Voc?? j?? tem uma conta? <Link to="/">Fazer login</Link>
          </S.LoginNavigate>
        </S.RegisterForm>
      </S.Container>
    </S.Background>
  );
}
