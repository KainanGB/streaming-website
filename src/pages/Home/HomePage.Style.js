import styled from "styled-components";

import * as pallete from "../../global/variables";

export const Container = styled.div`
  /*max-width: 1400px;*/
  /*margin: 0 auto;*/
  display: grid;
  grid-template-columns: 300px 1fr 300px;
`;

export const Content = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-rows: 1fr 300px 1fr;

  /*padding: 5em;*/
`;

export const Featured = styled.div``;

export const Main = styled.main`
  margin: 0 4rem;
`;
export const Cards = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 15rem;
  gap: 2rem;
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 2rem;
`;

export const Card = styled.div`
  background-image: url(${(props) => props.background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: end;
  justify-content: center;

  width: 11rem;
  height: 100%;

  border-radius: 0.5rem;

  position: relative;
  cursor: pointer;

  transition: transform 1s;

  :hover {
    transform: scale(1.1);
  }
`;
export const CardTitle = styled.h2``;

export const CardBadge = styled.img`
  width: 2rem;
  position: absolute;
  bottom: 13.8rem;
  left: 10rem;
`;

export const RightColumn = styled.div`
  margin-right: 1.5em;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 2rem 0 5em 0;

  svg {
    margin: 0 1rem;
    position: relative;
    cursor: pointer;
  }
`;

export const ProfileImage = styled.div`
  width: 3rem;
  cursor: pointer;

  img {
    /*border-radius: 100%;*/
  }
`;

export const UnreadMessages = styled.div`
  cursor: pointer;

  span {
    position: absolute;
    background-color: red;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 100%;
    right: 5.4rem;
    top: 2.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const RightColumnDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5em 0;

  p {
    margin: 0;
  }
`;
export const RightColumnCards = styled.div``;
export const RightColumnCard = styled.div`
  display: flex;
  align-items: center;
  padding: 1em;

  margin: 1.5em 0;
  border-radius: 0.5rem;
  background-color: ${pallete.buttonHover};

  cursor: pointer;

  transition: transform 2s;

  :hover {
    transform: scale(1.1);
  }

  img {
    width: 5rem;
  }
`;

export const Section = styled.section`
  margin: 0 4rem;
`;

export const CurrentAiring = styled.div`
  display: flex;
  align-items: center;
`;

export const CardBody = styled.div`
  padding: 0 1em;
`;

export const CurrentAiringCard = styled.div`
  /*display: flex;*/
  width: 10rem;
  transition: transform 2s;

  border-radius: 0.5rem;

  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }

  img {
    width: 8rem;
  }
`;

export const CurrentAiringBody = styled.div``;
