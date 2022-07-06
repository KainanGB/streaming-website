import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import * as S from "./LoginPage.Style";
import backgroundImage from "../../assets/aincrad.jpg";
import { FcGoogle } from "react-icons/fc";
import { MdMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiShow } from "react-icons/bi";

import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { user, loading, signInWithGoogle, signUpWithEmail } = useAuth();
  const [passwordShow, setPasswordShow] = useState(false);

  const handleShowPassword = () => {
    setPasswordShow(!passwordShow);
    console.log(passwordShow);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;

    if (user) navigate("/home");
  }, [user, loading]);

  const onSubmit = ({ email, password }) => {
    signUpWithEmail(email, password);
  };

  const onError = (err, e) => {
    console.log(err, e);
  };

  return (
    <S.Background background={backgroundImage}>
      <S.Container>
        <S.LoginForm onSubmit={handleSubmit(onSubmit, onError)}>
          <S.FormTitle>Fazer Login</S.FormTitle>
          <S.FormTextDiv>
            <MdMailOutline />
            <S.FormTextInput {...register("email")} />
          </S.FormTextDiv>
          <S.FormDivider>
            <S.FormText>Senha</S.FormText>
            <S.FormText>Esqueci a senha</S.FormText>
          </S.FormDivider>
          <S.FormTextDiv>
            <RiLockPasswordLine />
            <S.FormPasswordInput
              {...register("password")}
              name="password"
              type={passwordShow ? "text" : "password"}
            />
            <BiShow
              onClick={() => handleShowPassword()}
              className="show-password"
            />
          </S.FormTextDiv>
          <S.SubmitButton />
          <S.GoogleSubmitButton onClick={signInWithGoogle}>
            <FcGoogle />
          </S.GoogleSubmitButton>
          <S.RegisterLink>
            Não tem uma conta? Se <Link to="/register">inscreva</Link>
          </S.RegisterLink>
        </S.LoginForm>
      </S.Container>
    </S.Background>
  );
};
