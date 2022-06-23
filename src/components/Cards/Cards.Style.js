import styled from "styled-components";
import * as pallete from "../../global/variables";

export const Cards = styled.div`
  display: ${(props) => {
    if (props.secondary) {
      return "flex";
    } else return "grid";
  }};

  flex-direction: ${(props) => (props.secondary ? "column" : "row")};
  grid-template-columns: repeat(3, 400px);
  justify-content: ${(props) => (props.secondary ? "column" : "center")};
  gap: 3rem;
  margin: 0 auto;
`;

export const Card = styled.div`
  background-color: ${pallete.primaryClrWhite};
  color: black;
  padding: ${(props) => (props.cardBigger ? "2.65em 1em" : "1em")};
  /*padding: 1em 0;*/
  display: ${(props) => (props.spaceBetween ? "flex" : "block")};
  flex-direction: ${(props) => (props.spaceBetween ? "column" : "row")};
  justify-content: ${(props) =>
    props.spaceBetween ? "space-between" : "initial"};
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
`;

export const CardProfileImage = styled.img`
  width: 5rem;
`;

export const CardProfileInformation = styled.div`
  margin-left: 1em;
`;

export const CardProfileName = styled.h2``;

export const CardProfileDate = styled.small``;

export const CardText = styled.p`
  margin: 0.8em;
  font-weight: bold;
`;

export const CardBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const CardBox = styled.div`
  text-align: center;
  background-color: rgba(201, 204, 204, 0.2);
  margin: 0.4em;
  padding: 0.5em;

  cursor: pointer;
`;

export const CardTitle = styled.h2`
  margin-bottom: ${(props) => (props.marginBottom ? "3rem" : "initial")};
`;

export const CartBoxTitle = styled.h4``;

export const CardImage = styled.div`
  display: ${(props) => (props.smallCards ? "flex" : "block")};
  align-items: ${(props) => (props.smallCards ? "center" : "unset")};
  justify-content: ${(props) => (props.smallCards ? "center" : "initial")};
  height: ${(props) => {
    if (props.mediumCard) {
      return "auto";
    } else if (props.cardBigger) {
      return "100%";
    } else return "8rem";
  }};

  background-color: ${(props) => (props.smallCards ? "transparent" : "red")};
  padding: ${(props) => (props.smallCards ? "2em" : "0")};

  img {
    width: ${(props) => {
      if (props.smallCards) {
        return "4.625rem";
      } else return "100%";
    }};
    height: 100%;
  }
`;

export const CardSeeMore = styled.span``;
