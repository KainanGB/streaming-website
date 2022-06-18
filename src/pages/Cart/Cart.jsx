import { Navbar } from "../../components/Navbar";
import { useCart } from "../../hooks/useCart";
import * as S from "./Cart.Style";

import img from "../../assets/boxes-img.png";

export const Cart = () => {
  const { cart, removeProduct } = useCart();

  const total = cart.reduce((acc, currentValue) => {
    const total = currentValue.price * currentValue.amount;
    return acc + total;
  }, 0);

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
                    Preço: {price}
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
          <h1>{total}</h1>
        </S.CartContent>
      </S.Container>
    </>
  );
};
