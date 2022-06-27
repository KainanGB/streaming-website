import styled from "styled-components";
import * as pallete from "../../global/variables";

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 4.5fr 1.5fr;
`;

export const CartContent = styled.div`
  background-color: ${pallete.primaryClrWhite};
  padding: 2rem;
  margin: 2rem;
  color: ${pallete.primaryClrBlack};
`;

export const CartContentTitle = styled.h1``;

export const ProductCard = styled.div``;

export const CartListing = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CartListingTitle = styled.h1``;

export const ProductImage = styled.img`
  width: 100%;
  /*width: 190px;
  object-fit: cover;*/
`;

export const ProductInformation = styled.div`
  display: grid;
  grid-template-columns: 190px 1fr 150px;
  /*display: flex;*/
`;
export const ProductButtons = styled.div``;
export const ProductDetails = styled.div`
  margin-left: 2em;
`;
export const ProductTitle = styled.h1``;
export const ProductSmall = styled.small``;
export const ProductQuantity = styled.button``;
export const DeleteFromCartButton = styled.button``;
export const ProductPricing = styled.div`
  text-align: right;
`;
export const ProductFullPrice = styled.h2``;
export const ProductPrice = styled.h3``;
export const removeAllProductsFromCart = styled.button``;
export const CartSubTotal = styled.h2``;
export const CartSubmitBuyButton = styled.button``;
