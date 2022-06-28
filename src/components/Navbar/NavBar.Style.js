import styled from "styled-components";
import * as pallete from "../../global/variables";

export const Navbar = styled.nav`
  background-color: ${pallete.secondaryClrDarkBlack};

  & .dropdown {
    margin: 0 1em 0 0;

    & .dropdown-toggle {
      padding: 0.3281em 0;
      /*background: transparent;*/
      border: none;
      width: 10rem;
      &:hover {
        border: 0.1px solid ${pallete.primaryClrWhite};
      }
      a {
        position: relative;
      }
      &::after {
        position: relative;
        right: 0rem;
        top: 0.2rem;
      }
    }

    & .dropdown-menu {
      min-width: 5rem;
    }
  }
`;

export const TopHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1em;
  /*padding-bottom: 0.5em;*/

  a {
    color: ${pallete.primaryClrWhite};
    text-decoration: inherit;
  }
`;

export const Logo = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  width: 10.4rem;

  height: 2.2rem;
  position: relative;
  text-align: right;

  cursor: pointer;

  border: 0.1px solid transparent;
  &:hover {
    border: 0.1px solid ${pallete.primaryClrWhite};
  }
`;

export const SearchBar = styled.form`
  display: flex;
  height: 2.5em;
  flex: 1;
  margin: 0 1em;
  min-width: 50%;

  border-radius: 0.3em;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  border: none;
  padding: 0 1em;
  width: 100%;

  &:focus {
    outline: none;
    border: 2px solid ${pallete.primaryClrOrange};
    box-shadow: 0 0 0 2px #f90, 0 0 0 3px rgb(255 153 0 / 50%);
    -webkit-box-shadow: 0 0 0 2px #f90, 0 0 0 3px rgb(255 153 0 / 50%);
  }
`;

export const SearchButton = styled.button`
  border: none;
  padding: 0.2em 1em 0 1em;
  background-color: ${pallete.secondaryClrYellow};
  cursor: pointer;
  svg {
    font-weight: normal;
  }
`;

export const Login = styled.a`
  background-color: transparent;
  color: ${pallete.primaryClrWhite};
  font-weight: bold;
  margin: 0 1em;

  cursor: pointer;
  border: 0.1px solid transparent;
`;

export const Cart = styled.div`
  display: flex;
  position: relative;
  font-weight: bold;
  border: 0.1px solid transparent;
  width: 7rem;

  &:hover {
    border: 0.1px solid ${pallete.primaryClrWhite};
  }

  cursor: pointer;

  & .span {
    position: relative;
    right: 1.4rem;

    bottom: 0.5rem;
    font-size: 1.1rem;

    color: ${pallete.primaryClrOrange};
  }

  span + span {
    position: relative;
    /*left: 1.3rem;*/
    bottom: 0rem;
    top: 0.45rem;
  }
`;

export const CartImage = styled.img``;

export const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: ${pallete.secondaryClrMedium};
  padding: 0.5em 1em;

  div,
  a {
    border: 0.1px solid transparent;
    margin-right: 0.5em;
    cursor: pointer;
    font-size: 16px;
    color: #ffffff;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;

    &:hover {
      border: 0.1px solid ${pallete.primaryClrWhite};
    }
  }

  a:first-child {
    margin-right: 0;
  }
`;

export const HeaderMenu = styled.div`
  padding: 0;
  margin: 0;
`;

export const Link = styled.a``;

export const LinkMenu = styled.div``;

export const SignOutButton = styled.a`
  cursor: pointer;
  background: transparent;
  border: none;
  color: ${pallete.primaryClrWhite};
`;
