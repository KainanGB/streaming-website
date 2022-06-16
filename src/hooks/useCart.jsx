import { createContext, useContext, useState } from "react";
import axios from "axios";

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

    findIndex < 0
      ? console.error("Item não existe no carrinho")
      : axios
          .delete(`http://localhost:3000/api/products/${productId}`)
          .then((response) => {
            updatedCart.splice(findIndex, 1);

            setCart(updatedCart);
          });
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
