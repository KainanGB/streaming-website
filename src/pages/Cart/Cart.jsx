import { Navbar } from "../../components/Navbar";
import { useCart } from "../../hooks/useCart";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import { PricingFormat } from "../../utils/priceFormat";

import * as S from "./Cart.Style";
import axios from "axios";

import img from "../../assets/boxes-img.png";

import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

export const Cart = () => {
  const { cart, removeProduct, removeAllProducts, updateCartAmount } =
    useCart();
  const { user, loading, error } = useAuth();
  const [openDropdown, setOpenDropdown] = useState([]);
  //const [dropdownOpen, setdropdownOpen] = useState();

  const toggleDropdown = (index) => {
    let dropdownCopy = [...openDropdown];
    console.log(dropdownCopy);
    dropdownCopy[index] = !dropdownCopy[index];
    setOpenDropdown(dropdownCopy);
  };

  //const toggle = () => setdropdownOpen((prevState) => !prevState);

  const checkIfIsloggedIn = () => {
    if (user) navigate("/payment");
    if (!user) navigate("/login");
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    //if (!user) return navigate("/");
  }, [user, loading]);

  const total = cart.reduce((acc, currentValue) => {
    const total = currentValue.price * currentValue.amount;

    return acc + total;
  }, 0);

  //useEffect(() => {
  //  axios.get("http://localhost:3000/cart").then((response) => {
  //    const data = response.data;
  //    console.log(data.carts.map((newProductArray) => newProductArray));
  //  });
  //  console.log("mudou");
  //}, [cart]);

  return (
    <>
      <Navbar />
      <S.Container>
        <S.CartContent>
          <S.CartListing>
            <S.CartListingTitle>Carrinho de compras</S.CartListingTitle>
            <S.CartListingTitle secondary>Preço</S.CartListingTitle>
          </S.CartListing>
          {cart.map(
            ({ name, description, price, rating, amount, id }, index) => {
              return (
                <>
                  <S.ProductCard key={id}>
                    <S.ProductInformation>
                      <S.ProductImage src={img} />

                      <S.ProductDetails>
                        <S.ProductTitle>{name}</S.ProductTitle>
                        <S.ProductSmall>Em estoque</S.ProductSmall>
                        <S.ProductButtons>
                          <Dropdown
                            direction="up"
                            //toggle={toggle}
                            isOpen={openDropdown[index]}
                          >
                            <DropdownToggle
                              caret
                              className="dropdown-toggle"
                              onClick={() => toggleDropdown(index)}
                            >
                              Qtd: {amount}
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem
                                onClick={() => updateCartAmount(id, 1)}
                              >
                                1
                              </DropdownItem>
                              <DropdownItem
                                onClick={() => updateCartAmount(id, 2)}
                              >
                                2
                              </DropdownItem>
                              <DropdownItem
                                onClick={() => updateCartAmount(id, 3)}
                              >
                                3
                              </DropdownItem>
                              <DropdownItem
                                onClick={() => updateCartAmount(id, 4)}
                              >
                                4
                              </DropdownItem>
                              <DropdownItem
                                onClick={() => updateCartAmount(id, 5)}
                              >
                                5
                              </DropdownItem>
                              <DropdownItem
                                onClick={() => updateCartAmount(id, 6)}
                              >
                                6
                              </DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                          <S.DeleteFromCartButton
                            onClick={() => removeProduct(id)}
                          >
                            Excluir
                          </S.DeleteFromCartButton>
                        </S.ProductButtons>
                      </S.ProductDetails>

                      <S.ProductPricing>
                        <S.ProductFullPrice>
                          {PricingFormat(price)}
                        </S.ProductFullPrice>
                        <S.ProductPrice>
                          em até 2x de {PricingFormat(price / 2)} sem juros
                        </S.ProductPrice>
                      </S.ProductPricing>
                    </S.ProductInformation>
                  </S.ProductCard>
                  <hr />
                </>
              );
            }
          )}

          {cart.length > 0 ? (
            <S.removeAllProductsFromCart onClick={() => removeAllProducts()}>
              Remover todos
            </S.removeAllProductsFromCart>
          ) : (
            ""
          )}
        </S.CartContent>

        <S.CartContent>
          <S.CartContentTitle>
            Seu pedido se qualifica para Frete GRÁTIS. Selecione Frete GRÁTIS ao
            finalizar o pedido. Veja detalhes.
          </S.CartContentTitle>
          <S.CartSubTotal>
            Subtotal ({cart.length} itens): {PricingFormat(total)}
          </S.CartSubTotal>
          <S.CartSubmitBuyButton onClick={checkIfIsloggedIn}>
            Fechar pedido
          </S.CartSubmitBuyButton>
        </S.CartContent>
      </S.Container>
    </>
  );
};
