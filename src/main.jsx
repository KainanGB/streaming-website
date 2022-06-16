import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global/index.css";
import GlobalCSS from "./global/global";

import { BrowserRouter } from "react-router-dom";
import { createServer, Model } from "miragejs";
import { v4 as generateId } from "uuid";

import defaultImg from "./assets/laptop-img.jpg";
import { CartProvider } from "./hooks/useCart";

createServer({
  models: {
    products: Model,
    //cart: Model,
  },

  routes() {
    this.namespace = "api";

    this.get("/products/:id", (schema, request) => {
      let id = request.params.id;

      //let newProduct = products.new({ name: "teste" });
      //newProduct.id = 2;
      //newProduct.save();

      //console.log(newProduct);

      return schema.cart.create({ name: "teste" });
    });

    this.delete("/products/:id", (schema, request) => {
      let id = request.params.id;

      return schema.products.find(id).destroy();
    });

    this.get("/products", (schema, request) => {
      return schema.products.all();
    });
  },

  //seeds(server) {
  //  server.create("cart", {
  //    name: "Mouse sem fio Logitech",
  //    price: "58,90",
  //    description: "teste",
  //    rating: 5,
  //    id: generateId(),
  //    image: defaultImg,
  //  });
  //},

  seeds(server) {
    server.create("product", {
      name: "Mouse sem fio Logitech",
      price: "58,90",
      description: "teste",
      rating: 5,
      id: generateId(),
      image: defaultImg,
    });

    server.create("product", {
      name: "TVs",
      price: "3000",
      description: "teste2",
      rating: 3,
      id: generateId(),
      image: defaultImg,
    });

    server.create("product", {
      name: "PCs",
      price: "6000",
      description: "teste3",
      rating: 4,
      id: generateId(),
      image: defaultImg,
    });

    server.create("product", {
      name: "Móveis",
      price: "100",
      description: "teste3",
      rating: 2,
      id: generateId(),
      image: defaultImg,
    });

    server.create("product", {
      name: "Carro",
      price: "100",
      description: "teste4",
      rating: 1,
      id: generateId(),
      image: defaultImg,
    });

    server.create("product", {
      name: "Casa",
      price: "10000",
      description: "teste1",
      rating: 5,
      id: generateId(),
      image: defaultImg,
    });
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <GlobalCSS />
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
