import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import * as S from "./Register.Style";
import { FaGoogle } from "react-icons/fa";

export function Register() {
  const [formError, setFormError] = useState("");
  //const [password, setPassword] = useState("");
  //const [userName, setUserName] = useState("");
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
    const inputNameError = toast.error(errors.name?.message);
    const inputEmailError = toast.error(errors.email?.message);
    const inputPasswordError = toast.error(errors.password?.message);

    return inputPasswordError == inputEmailError
      ? inputPasswordError
      : inputNameError;
  };

  return (
    <S.Container>
      <S.RegisterForm onSubmit={handleSubmit(onSubmit, onError)}>
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
            minLength: {
              value: 2,
              message: "Informe uma senha maior que 2 letras ou números",
            },
            maxLength: {
              value: 20,
              message: "Informe uma senha menor que 20 letras ou números",
            },
          })}
        />
        <S.SubmitButton>Registrar</S.SubmitButton>
        <S.GoogleLogin onClick={signInWithGoogle}>
          <FaGoogle />
        </S.GoogleLogin>
        <S.LoginNavigate>
          Already have an account? <Link to="/login">Login</Link> now.
        </S.LoginNavigate>
      </S.RegisterForm>
    </S.Container>
  );
}
