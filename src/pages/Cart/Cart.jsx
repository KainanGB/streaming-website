import { Navbar } from "../../components/Navbar";
import { useCart } from "../../hooks/useCart";
import * as S from "./Cart.Style";

export const Cart = () => {
  const { cart, removeProduct } = useCart();

  return (
    <>
      <Navbar />
      <S.Container>
        <S.CartContent>
          <S.CartContentTitle></S.CartContentTitle>
          <S.CartHeader>
            <S.CartImage></S.CartImage>
          </S.CartHeader>
          {cart.map(({ name, description, price, rating, amount, id }) => {
            return (
              <S.CartBody>
                <S.CartTitle>{name}</S.CartTitle>
                <S.CartSmall>em estoque</S.CartSmall>
                <S.CartInformation>Vendido por: XXXXX</S.CartInformation>
                <S.CartInformation>Descrição : {description}</S.CartInformation>
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
              </S.CartBody>
            );
          })}
        </S.CartContent>
      </S.Container>
    </>
  );
};
