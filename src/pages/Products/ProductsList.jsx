import { useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { useCart } from "../../hooks/useCart";

import * as S from "./ProductList.Style";
import { useAuth } from "../../hooks/useAuth";

export const ProductList = () => {
  const { addProduct, removeProduct } = useCart();
  const [products, setProducts] = useState([]);
  const { user, loading, error } = useAuth();

  useEffect(() => {
    if (!loading) return;
  }, [user, loading]);

  const handleAddProduct = (id, data) => {
    addProduct(id, data);
  };

  const handleRemoveProduct = (id) => {
    removeProduct(id);
  };

  return (
    <>
      <Navbar />

      <S.Cards>
        {products
          ? products.map(
              (
                { name, price, description, rating, id, image },
                index,
                data
              ) => {
                return (
                  <S.Card key={id}>
                    <S.CardHeader>
                      <S.CardListingImage
                        onClick={() => handleRemoveProduct(id)}
                        src={image}
                      ></S.CardListingImage>
                      <S.CardPricing>{price}</S.CardPricing>
                    </S.CardHeader>
                    <S.CardBody>
                      <S.CardTitle>{name}</S.CardTitle>
                      <S.CardDescription>{description}</S.CardDescription>
                      <S.CardRating>{rating}</S.CardRating>
                      <S.AddToCartButton
                        onClick={() => handleAddProduct(id, data[index])}
                      >
                        Adicionar ao carrinho
                      </S.AddToCartButton>
                    </S.CardBody>
                  </S.Card>
                );
              }
            )
          : "loading..."}
      </S.Cards>
    </>
  );
};
