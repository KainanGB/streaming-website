import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext({});

// TODOS
// CHECAR SE ITEM JÁ ESTÁ NO CARRINHO E SE SIM EM VEZ DE ADICIONAR NOVAMENTE AUMENTAR SOMENTE A QUANTIDADE DESTE ITEM
//

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  async function addProduct(productId, data) {
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

    setCart(newProductArray);
  }

  async function removeProduct(productId) {
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

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
