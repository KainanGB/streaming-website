import { Navbar } from "../../components/Navbar";
import { useCart } from "../../hooks/useCart";
import * as S from "./Cart.Style";
import axios from "axios";

import img from "../../assets/boxes-img.png";
import { useEffect } from "react";

export const Cart = () => {
  const { cart, removeProduct, removeAllProducts } = useCart();

  const total = cart.reduce((acc, currentValue) => {
    const total = currentValue.price * currentValue.amount;
    return acc + total;
  }, 0);

  //useEffect(() => {
  //  axios.get("http://localhost:3000/api/cart").then((response) => {
  //    const data = response.data;
  //    console.log(data.carts.map((newProductArray) => newProductArray));
  //  });
  //  console.log("mudou");
  //}, [cart]);

  return (
    <>
      <Navbar />
      <S.Container>
        <S.CartContent>
          <S.CartContentTitle>Carrinho de compras</S.CartContentTitle>
          {cart.map(({ name, description, price, rating, amount, id }) => {
            return (
              <S.CartBody key={id}>
                <S.CartLeft>
                  <S.CartImage src={img}></S.CartImage>
                </S.CartLeft>
                <S.CartRight>
                  <S.CartTitle>{name}</S.CartTitle>
                  <S.CartSmall>em estoque</S.CartSmall>
                  <S.CartInformation>Vendido por: XXXXX</S.CartInformation>
                  <S.CartInformation>
                    Descrição : {description}
                  </S.CartInformation>
                  <S.CartProductDescription>
                    Preço: R${price} | 10x de R${price / 10} sem juros
                  </S.CartProductDescription>
                  <S.CartProductDescription>
                    Qualidade: {rating}
                  </S.CartProductDescription>
                  <S.CartProductAmount>Qtd: {amount}</S.CartProductAmount>
                  <S.CartDeleteButton onClick={() => removeProduct(id)}>
                    Excluir
                  </S.CartDeleteButton>
                </S.CartRight>
              </S.CartBody>
            );
          })}
        </S.CartContent>

        <S.CartContent>
          <h1>R$ {total}</h1>
          <S.CartRemoveAllButton onClick={() => removeAllProducts()}>
            Remover todos
          </S.CartRemoveAllButton>
        </S.CartContent>
      </S.Container>
    </>
  );
};
