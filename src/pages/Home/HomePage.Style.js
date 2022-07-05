import styled from "styled-components";

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const HeroContent = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2rem 0;
`;

export const BackgroundIsLoading = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
  z-index: 99;
  position: absolute;
`;
