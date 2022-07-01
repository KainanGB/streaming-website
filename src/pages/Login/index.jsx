import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import * as S from "./LoginPage.Style";
import amazonLogo from "../../assets/amazon_logo-black.svg";

import { AiFillGoogleCircle } from "react-icons/ai";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { user, loading, signInWithGoogle, signUpWithEmail } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;

    if (user) navigate("/");
  }, [user, loading]);

  const onSubmit = ({ email, password }) => {
    signUpWithEmail(email, password);
  };

  const onError = (err, e) => {
    console.log(err, e);
  };

  return (
    <S.Container>
      <S.Logo src={amazonLogo} />
      <S.LoginForm onSubmit={handleSubmit(onSubmit, onError)}>
        <S.FormTitle>Fazer Login</S.FormTitle>
        <S.FormTextInput {...register("email")} />
        <S.FormDiv>
          <S.FormText>Senha</S.FormText>
          <S.FormText>Esqueci a senha</S.FormText>
        </S.FormDiv>
        <S.FormPasswordInput {...register("password")} />
        <S.SubmitButton />
        <S.GoogleSubmitButton onClick={signInWithGoogle}>
          <AiFillGoogleCircle />
          <S.FormText>Sign in with Google</S.FormText>
        </S.GoogleSubmitButton>
        <S.RegisterLink>
          Não tem uma conta? Se <Link to="/register">inscreva</Link>
        </S.RegisterLink>
      </S.LoginForm>
    </S.Container>
  );
};
