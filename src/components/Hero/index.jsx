import * as S from "./style";

import HeroImage from "../../assets/hero.jpg";
import { Cards } from "../Cards";

export const Hero = () => {
  return (
    <S.Container>
      <S.HeroContent image={HeroImage}>
        <Cards />
      </S.HeroContent>
    </S.Container>
  );
};
