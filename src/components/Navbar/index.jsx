import * as S from "./NavBar.Style";
import { Link, useNavigate } from "react-router-dom";

import amazonLogo from "../../assets/amazon-logo.svg";
import cartImage from "../../assets/cart.svg";

import { MdSearch as IconSearch } from "react-icons/md";
import { useCart } from "../../hooks/useCart.jsx";
import { useAuth } from "../../hooks/useAuth";
import { useState, useEffect } from "react";

export function Navbar() {
  const { cart } = useCart();
  const {
    user,
    loading,
    error,
    fetchUserData,
    userData,
    deleteUserFromWebsite,
    logout,
  } = useAuth();

  const navigate = useNavigate();
  //const [dropdownOpen, setdropdownOpen] = useState(false);
  //const [isOpen, setIsOpen] = useState(false);

  //const toggle = () => setdropdownOpen((prevState) => !prevState);

  useEffect(() => {
    if (!loading) fetchUserData();

    if (!user) navigate("/");
  }, [user, loading]);

  return (
    <S.AsideBar>
      <S.NavBar>
        <S.Logo>
          <h1>Aincrad</h1>
        </S.Logo>
        <S.NavList>
          <S.NavTitle>Menu</S.NavTitle>
          <S.NavItem>Home</S.NavItem>
          <S.NavItem>Trending</S.NavItem>
          <S.NavItem>Genre</S.NavItem>
          <S.NavItem>Catalog</S.NavItem>
          <S.NavTitle>My Library</S.NavTitle>
          <S.NavItem>Recently</S.NavItem>
          <S.NavItem>Favorites</S.NavItem>

          <S.NavTitle>Setting</S.NavTitle>
          <S.NavItem>Account</S.NavItem>

          {user ? <S.LogoutButton onClick={logout}>Logout</S.LogoutButton> : ""}
        </S.NavList>
      </S.NavBar>
    </S.AsideBar>
  );
}

{
  /*<S.Navbar>
      <S.TopHeader>
        <Link to="/">
          <S.Logo image={amazonLogo}>.com.br</S.Logo>
        </Link>
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
              <S.Login>Ol??, {userData.name}</S.Login>
            ) : (
              <S.SignOutButton onClick={() => navigate("/login")}>
                Ol??, fa??a seu login
              </S.SignOutButton>
            )}
          </DropdownToggle>
          {user ? (
            <DropdownMenu dark>
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
              <DropdownItem>Minha conta</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => deleteUserFromWebsite(user)}>
                Deletar conta
              </DropdownItem>
            </DropdownMenu>
          ) : (
            ""
          )}
        </Dropdown>

        <Link to="/cart">
          <S.Cart>
            <S.CartImage src={cartImage} />
            <span className="span">{cart.length}</span>
            <span>Carrinho</span>
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
    </S.Navbar>*/
}
