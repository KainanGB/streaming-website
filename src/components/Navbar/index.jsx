import * as S from "./style.js";

import amazonLogo from "../../assets/amazon-logo.svg";
import cartImage from "../../assets/cart.svg";
import { FaSearchLocation as IconLocation } from "react-icons/fa";

import { MdSearch as IconSearch } from "react-icons/md";

export function Navbar() {
  return (
    <S.Navbar>
      <S.TopHeader>
        <S.Logo image={amazonLogo}>.com.br</S.Logo>
        <S.Location>
          <IconLocation size={18} />
          <span>
            Enviar para
            <br />
            <b>08454564</b>
          </span>
        </S.Location>
        <S.SearchBar>
          <S.SearchInput placeholder="Search.." name="search" />
          <S.SearchButton type="submit">
            <IconSearch size={27} />
          </S.SearchButton>
        </S.SearchBar>
        <S.Login>Login</S.Login>
        <S.Cart image={cartImage}>
          <span>2</span>
          <span>Cart</span>
        </S.Cart>
      </S.TopHeader>
      <S.Header>
        <S.HeaderMenu>||| All</S.HeaderMenu>
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
