import * as S from "./NavBar.Style";
import { Link, useNavigate } from "react-router-dom";

import amazonLogo from "../../assets/amazon-logo.svg";
import cartImage from "../../assets/cart.svg";
import { FaSearchLocation as IconLocation } from "react-icons/fa";

import { MdSearch as IconSearch } from "react-icons/md";
import { useCart } from "../../hooks/useCart.jsx";
import { logout } from "../../server/firebase";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";

export function Navbar() {
  const { cart } = useCart();
  const { user, loading, error, name, fetchUserName, deleteUserFromWebsite } =
    useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;

    fetchUserName();

    if (!user) navigate("/");
  }, [user, loading]);

  return (
    <S.Navbar>
      <S.TopHeader>
        <Link to="/">
          <S.Logo image={amazonLogo}>.com.br</S.Logo>
        </Link>
        <S.Location>
          <IconLocation size={18} />
          <button onClick={() => deleteUserFromWebsite(user)}>
            deleta ai amigo, por favor.
          </button>
        </S.Location>
        <S.SearchBar>
          <S.SearchInput placeholder="Search.." name="search" />
          <S.SearchButton type="submit">
            <IconSearch size={27} />
          </S.SearchButton>
        </S.SearchBar>
        <S.Login>
          Bem vindo <br />
          {user ? name : "undefined"}
        </S.Login>
        <Link to="/cart">
          <S.Cart image={cartImage}>
            <span>{cart.length}</span>
            <span>Cart</span>
          </S.Cart>
        </Link>
        <S.SignOutButton onClick={logout}>logout</S.SignOutButton>
      </S.TopHeader>
      <S.Header>
        <Link to="/products">
          <S.HeaderMenu>||| All</S.HeaderMenu>
        </Link>
        <S.Link>Fashion</S.Link>
        <S.Link>Mobiles</S.Link>
        <S.Link>Gift Ideas</S.Link>
        <S.LinkMenu>Prime</S.LinkMenu>
        <S.Link>Amazon Pay</S.Link>
        <S.Link>Gift Cards</S.Link>
        <S.Link>Sports, Fitness & OutDoors</S.Link>
        <S.Link>Computers</S.Link>
        <S.Link>Costumer Service</S.Link>
      </S.Header>
    </S.Navbar>
  );
}
