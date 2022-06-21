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
import { AuthProvider } from "./hooks/useAuth";

createServer({
  models: {
    products: Model,
    carts: Model,
  },

  routes() {
    this.namespace = "api";

    //this.get("/products/:id", (schema, request) => {
    //  let id = request.params.id;
    //  console.log(id);

    //  let cart = schema.cart.create({ name: "teste", id: id });

    //  cart.save();

    //  console.log(cart.name);

    //  //console.log(newProduct);

    //  return cart;
    //});

    this.get("/products", (schema, request) => {
      return schema.products.all();
    });

    this.delete("/products/:id", (schema, request) => {
      let id = request.params.id;

      return schema.products.find(id).destroy();
    });

    this.get("/cart", (schema, request) => {
      return schema.carts.all();
    });

    this.post("/cart", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);

      return schema.carts.create(attrs);
    });

    this.delete("/cart/:id", (schema, request) => {
      let id = request.params.id;

      return schema.carts.find(id).destroy();
    });
  },

  seeds(server) {
    server.create("product", {
      name: "Mouse sem fio Logitech",
      price: "58.90",
      description: "MOUSE",
      rating: 5,
      id: generateId(),
      image: defaultImg,
    });

    server.create("product", {
      name: "TVs",
      price: "3000",
      description: "TV",
      rating: 3,
      id: generateId(),
      image: defaultImg,
    });

    server.create("product", {
      name: "PCs",
      price: "6000",
      description: "PC",
      rating: 4,
      id: generateId(),
      image: defaultImg,
    });

    server.create("product", {
      name: "Móveis",
      price: "100",
      description: "MOVEL",
      rating: 2,
      id: generateId(),
      image: defaultImg,
    });

    server.create("product", {
      name: "Carro",
      price: "100",
      description: "CARRO",
      rating: 1,
      id: generateId(),
      image: defaultImg,
    });

    server.create("product", {
      name: "Casa",
      price: "10000",
      description: "CASA",
      rating: 5,
      id: generateId(),
      image: defaultImg,
    });
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <GlobalCSS />
          <App />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
