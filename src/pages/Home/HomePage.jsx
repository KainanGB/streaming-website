import { useNavigate } from "react-router-dom";

import { Navbar } from "../../components/Navbar";
import { Cards } from "../../components/Cards";

import heroImage from "../../assets/hero.jpg";
import * as S from "./HomePage.Style";
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";

export const HomePage = () => {
  const { user, loading, error } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    //if (!user) return navigate("/");
  }, [user, loading]);

  return (
    <>
      <Navbar />
      <S.HeroContent image={heroImage}>
        <Cards />
      </S.HeroContent>
    </>
  );
};
