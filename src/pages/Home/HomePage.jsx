import { useNavigate } from "react-router-dom";

import { Navbar } from "../../components/Navbar";
import { Cards } from "../../components/Cards";

import heroImage from "../../assets/hero.jpg";
import * as S from "./HomePage.Style";
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Spinner } from "reactstrap";

export const HomePage = () => {
  const { user, loading, error } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {}, [user, loading]);

  return (
    <>
      <Navbar />

      <Spinner
        color="black"
        className={loading ? "loading" : "loading--hide"}
      ></Spinner>

      <S.HeroContent image={heroImage}>
        <Cards />
      </S.HeroContent>
    </>
  );
};
