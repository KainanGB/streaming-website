import { createContext, useContext, useState } from "react";
import axios from "axios";

const CartContext = createContext({});

// TODOS
// CHECAR SE ITEM JÁ ESTÁ NO CARRINHO E SE SIM EM VEZ DE ADICIONAR NOVAMENTE AUMENTAR SOMENTE A QUANTIDADE DESTE ITEM
//

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  async function addProduct(productId) {
    axios
      .get(`http://localhost:3000/api/products/${productId}`)
      .then((response) => {
        const data = response.data.products;

        const newProductArray = [...cart, data];

        setCart(newProductArray);
      });
  }

  return (
    <CartContext.Provider value={{ cart, addProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
