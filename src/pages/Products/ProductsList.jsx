import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { useCart } from "../../hooks/useCart";

import axios from "axios";

import * as S from "./style";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addProduct } = useCart();

  useEffect(() => {
    axios.get("http://localhost:3000/api/products").then((response) => {
      const data = response.data.products;
      setProducts(data);
    });

    //console.log(products);
  }, []);

  const handleAddProduct = (id) => {
    addProduct(id);
  };

  return (
    <>
      <Navbar />
      <S.Cards>
        {products.map(({ name, price, description, rating, id, image }) => {
          return (
            <S.Card key={id}>
              <S.CardHeader>
                <S.CardListingImage src={image}></S.CardListingImage>
                <S.CardPricing>{price}</S.CardPricing>
              </S.CardHeader>
              <S.CardBody>
                <S.CardTitle>{name}</S.CardTitle>
                <S.CardDescription>{description}</S.CardDescription>
                <S.CardRating>{rating}</S.CardRating>
                <S.AddToCartButton onClick={() => handleAddProduct(id)}>
                  Adicionar ao carrinho
                </S.AddToCartButton>
              </S.CardBody>
            </S.Card>
          );
        })}
      </S.Cards>
    </>
  );
};
