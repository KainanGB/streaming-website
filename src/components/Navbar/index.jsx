import * as S from "./NavBar.Style";
import { Link, useNavigate } from "react-router-dom";

import amazonLogo from "../../assets/amazon-logo.svg";
import cartImage from "../../assets/cart.svg";
import { FaSearchLocation as IconLocation } from "react-icons/fa";

import { MdSearch as IconSearch } from "react-icons/md";
import { useCart } from "../../hooks/useCart.jsx";
import { useAuth } from "../../hooks/useAuth";
import { useState, useEffect } from "react";

import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

export function Navbar() {
  const { cart } = useCart();
  const {
    user,
    loading,
    error,
    name,
    fetchUserName,
    deleteUserFromWebsite,
    logout,
  } = useAuth();

  const navigate = useNavigate();
  const [dropdownOpen, setdropdownOpen] = useState(false);
  //const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setdropdownOpen((prevState) => !prevState);

  useEffect(() => {
    if (loading) return;

    fetchUserName();

    //if (!user) navigate("/");
  }, [user, loading]);

  return (
    <S.Navbar>
      <S.TopHeader>
        <Link to="/">
          <S.Logo image={amazonLogo}>.com.br</S.Logo>
        </Link>
        <S.Location>
          <IconLocation size={18} />
        </S.Location>
        <S.SearchBar>
          <S.SearchInput placeholder="Search.." name="search" />
          <S.SearchButton type="submit">
            <IconSearch size={27} />
          </S.SearchButton>
        </S.SearchBar>

        <Dropdown
          isOpen={dropdownOpen}
          onMouseEnter={toggle}
          onMouseLeave={toggle}
          toggle={toggle}
        >
          <DropdownToggle caret className="dropdown-toggle">
            {user ? (
              <S.Login>Olá, {name}</S.Login>
            ) : (
              <S.SignOutButton onClick={() => navigate("/login")}>
                Olá, faça seu login
              </S.SignOutButton>
            )}
          </DropdownToggle>
          <DropdownMenu dark isOpen={toggle}>
            {user ? (
              <DropdownItem onClick={logout}>
                <S.SignOutButton>Sair</S.SignOutButton>
              </DropdownItem>
            ) : (
              <DropdownItem onClick={() => navigate("/login")}>
                <S.SignOutButton>Entrar </S.SignOutButton>
              </DropdownItem>
            )}

            <DropdownItem onClick={() => navigate("/cart")}>
              Seus pedidos
            </DropdownItem>
            {/*<DropdownItem text>Dropdown Item Text</DropdownItem>*/}
            {/*<DropdownItem disabled>Action (disabled)</DropdownItem>*/}
            <DropdownItem>Minha conta</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => deleteUserFromWebsite(user)}>
              Deletar conta
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Link to="/cart">
          <S.Cart>
            <S.CartImage src={cartImage} />
            <span className="span">{cart.length}</span>
            <span>Cart</span>
          </S.Cart>
        </Link>
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
