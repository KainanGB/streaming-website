import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addProduct(productId, data) {
    const newProductArray = [...cart];
    const findIndex = cart.find((product) => product.id === productId);
    const currentAmount = findIndex ? findIndex.amount : 0;
    const amount = currentAmount + 1;

    if (findIndex) {
      findIndex.amount = amount;
    } else {
      const newProduct = { ...data, amount: 1 };

      newProductArray.push(newProduct);
    }

    //axios.post("http://localhost:3000/api/cart", {
    //  cart,
    //});
    console.log(newProductArray);

    setCart(newProductArray);
  }

  function updateCartAmount(productId, qtt) {
    const updatedCart = [...cart];
    const findIndex = updatedCart.findIndex((product) => {
      return product.id === productId;
    });
    updatedCart[findIndex].amount = qtt;
    setCart(updatedCart);
  }

  function removeProduct(productId) {
    const updatedCart = [...cart];

    const findIndex = updatedCart.findIndex((product) => {
      return product.id === productId;
    });
    const amount = updatedCart[findIndex].amount;

    if (findIndex < 0) {
      return console.error("Item não existe no carrinho");
    } else if (amount > 1) {
      updatedCart[findIndex].amount = amount - 1;
      return setCart(updatedCart);
    } else {
      updatedCart.splice(findIndex, 1);
      return setCart(updatedCart);
    }
  }

  function removeAllProducts() {
    const updatedCart = [...cart];
    updatedCart.splice(0, cart.length);
    setCart(updatedCart);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        removeAllProducts,
        updateCartAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
