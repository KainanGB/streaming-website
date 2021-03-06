import * as S from "./Cards.Style";

import profileImg from "../../assets/profile.svg";
import boxesImg from "../../assets/boxes-img.png";
import laptopImg from "../../assets/laptop-img.jpg";
import computerImg from "../../assets/pc-img.jpg";
import watcheImg from "../../assets/watche-img.png";
import phoneImg from "../../assets/phone-img.png";
import fashionImg from "../../assets/fashion-img.png";
import { useAuth } from "../../hooks/useAuth";

export const Cards = () => {
  const { name, createdAt } = useAuth();

  return (
    <S.Cards>
      <S.Card>
        {name ? (
          <S.CardHeader>
            {/*<S.CardProfileImage alt="user image" />*/}
            <S.CardProfileInformation>
              <S.CardProfileName>Hi, {name}</S.CardProfileName>
              <S.CardProfileDate>Customer since {createdAt}</S.CardProfileDate>
            </S.CardProfileInformation>
          </S.CardHeader>
        ) : (
          <></>
        )}

        <S.CardText>Top links for you</S.CardText>
        <S.CardBody>
          <S.CardBox>
            <S.CardImage smallCards>
              <img src={boxesImg} alt="" />
            </S.CardImage>

            <S.CartBoxTitle>Your Orders</S.CartBoxTitle>
          </S.CardBox>

          <S.CardBox>
            <S.CardImage smallCards>
              <img src={phoneImg} alt="" />
            </S.CardImage>

            <S.CartBoxTitle>Mobile & Acessories</S.CartBoxTitle>
          </S.CardBox>

          <S.CardBox>
            <S.CardImage smallCards>
              <img src={watcheImg} alt="" />
            </S.CardImage>

            <S.CartBoxTitle>Watches for Men</S.CartBoxTitle>
          </S.CardBox>

          <S.CardBox>
            <S.CardImage smallCards>
              <img src={fashionImg} alt="" />
            </S.CardImage>
            <S.CartBoxTitle>Fashion</S.CartBoxTitle>
          </S.CardBox>
        </S.CardBody>
      </S.Card>

      <S.Card spaceBetween>
        <S.CardHeader>
          <S.CardTitle>Conheça os Dispositivos Amazon</S.CardTitle>
        </S.CardHeader>
        <S.CardBody>
          <S.CardBox>
            <S.CardImage smallCards>
              <img src={boxesImg} alt="" />
            </S.CardImage>

            <S.CartBoxTitle>Your Orders</S.CartBoxTitle>
          </S.CardBox>

          <S.CardBox>
            <S.CardImage smallCards>
              <img src={phoneImg} alt="" />
            </S.CardImage>

            <S.CartBoxTitle>Mobile & Acessories</S.CartBoxTitle>
          </S.CardBox>

          <S.CardBox>
            <S.CardImage smallCards>
              <img src={watcheImg} alt="" />
            </S.CardImage>

            <S.CartBoxTitle>Watches for Men</S.CartBoxTitle>
          </S.CardBox>

          <S.CardBox>
            <S.CardImage smallCards>
              <img src={fashionImg} alt="" />
            </S.CardImage>
            <S.CartBoxTitle>Fashion</S.CartBoxTitle>
          </S.CardBox>
        </S.CardBody>
      </S.Card>

      <S.Cards secondary>
        <S.Card cardBigger>
          <S.CardTitle>Shop on the Amazon App</S.CardTitle>
          <S.CardSeeMore>See More</S.CardSeeMore>
        </S.Card>

        <S.CardImage cardBigger>
          <img src={laptopImg} alt="" />
        </S.CardImage>
      </S.Cards>
    </S.Cards>
  );
};
