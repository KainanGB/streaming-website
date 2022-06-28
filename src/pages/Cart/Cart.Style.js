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

  .dropdown {
    border: 1px solid;
    border-color: #f5f9f9;
    border-radius: 3px;
    box-shadow: 0 0 0 0.5px rgba(130, 138, 145, 0.3);
  }

  .dropdown-toggle {
    color: ${pallete.primaryClrBlack};
    background: #f0f2f2;
    box-shadow: 0 2px 5px rgba(15, 17, 17, 0.15);
    border: 1px solid;
    border-color: #f5f9f9;
    border-radius: 3px;
  }
`;

export const CartContentTitle = styled.p``;

export const ProductCard = styled.div`
  /*border-top: 1px solid ${pallete.darkGrey};*/
`;

export const CartListing = styled.div`
  display: flex;
  justify-content: space-between;
  /*&:first-child {
    border-top: 1px solid ${pallete.darkGrey};
  }*/
`;
export const CartListingTitle = styled.h1`
  font-size: ${(props) => (props.secondary ? "1rem" : "2rem")};
  margin-top: 0.7em;
  margin-bottom: 1em;
  display: flex;
  align-items: center;

  &:nth-child(2) {
    margin-bottom: 0;
  }
`;

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
export const ProductButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 2em;
`;
export const ProductTitle = styled.h1``;
export const ProductSmall = styled.small``;
export const ProductQuantity = styled.button``;
export const DeleteFromCartButton = styled.button`
  border: none;
  background: transparent;
  color: ${pallete.secondaryClrBlue};
  margin-left: 1em;
  padding-left: 1em;
  border-left: 1px solid ${pallete.darkGrey};
  height: 70%;

  &:hover {
    opacity: 0.7;
  }
`;
export const ProductPricing = styled.div`
  text-align: right;
`;
export const ProductFullPrice = styled.h2``;
export const ProductPrice = styled.h3``;
export const removeAllProductsFromCart = styled.button`
  background-color: ${pallete.primaryClrYellow};
  border: 1px solid ${pallete.borderColor};
  border-radius: 0.5rem;
  padding: 0.5em;

  transition: filter 1s;

  &:hover {
    /*background-color: rgba(255, 216, 20, 0.7);*/
    filter: brightness(90%);
  }
`;
export const CartSubTotal = styled.h2``;
export const CartSubmitBuyButton = styled.button`
  background-color: ${pallete.primaryClrYellow};
  border: 1px solid ${pallete.borderColor};
  border-radius: 0.5rem;
  padding: 0.7em;
  margin-top: 1em;
  width: 100%;

  transition: filter 1s;

  &:hover {
    /*background-color: rgba(255, 216, 20, 0.7);*/
    filter: brightness(90%);
  }
`;
