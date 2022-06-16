import { Navbar } from "../../components/Navbar";
import { Cards } from "../../components/Cards";

import heroImage from "../../assets/hero.jpg";
import * as S from "./style";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <S.HeroContent image={heroImage}>
        <Cards />
      </S.HeroContent>
    </>
  );
};
