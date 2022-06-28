import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global/index.css";
import { v4 as generateId } from "uuid";

import defaultImg from "../src/assets/boxes-img.png";

import { createServer, Model } from "miragejs";

//createServer({
//  models: {
//    products: Model,
//    carts: Model,
//  },

//  seeds(server) {
//    server.db.loadData({
//      products: [
//        {
//          name: "Mouse sem fio Logitech",
//          price: "58.90",
//          description: "MOUSE",
//          rating: 5,
//          id: generateId(),
//          image: defaultImg,
//        },
//        {
//          name: "TVs",
//          price: "3000",
//          description: "TV",
//          rating: 3,
//          id: generateId(),
//          image: defaultImg,
//        },
//        {
//          name: "PCs",
//          price: "6000",
//          description: "PC",
//          rating: 4,
//          id: generateId(),
//          image: defaultImg,
//        },
//        {
//          name: "Móveis",
//          price: "100",
//          description: "MOVEL",
//          rating: 2,
//          id: generateId(),
//          image: defaultImg,
//        },
//        {
//          name: "Carro",
//          price: "100",
//          description: "CARRO",
//          rating: 1,
//          id: generateId(),
//          image: defaultImg,
//        },
//        {
//          name: "Casa",
//          price: "10000",
//          description: "CASA",
//          rating: 5,
//          id: generateId(),
//          image: defaultImg,
//        },
//      ],
//    });
//  },

//  routes() {
//    //this.namespace = "api";

//    this.get("/products", (schema, request) => {
//      return this.schema.all("products");
//    });

//    //this.delete("/products/:id", (schema, request) => {
//    //  let id = request.params.id;

//    //  return schema.products.find(id).destroy();
//    //});

//    //this.get("/cart", (schema, request) => {
//    //  return schema.carts.all();
//    //});

//    //this.post("/cart", (schema, request) => {
//    //  let attrs = JSON.parse(request.requestBody);

//    //  return schema.carts.create(attrs);
//    //});

//    //this.delete("/cart/:id", (schema, request) => {
//    //  let id = request.params.id;

//    //  return schema.carts.find(id).destroy();
//    //});
//    this.passthrough();
//    this.passthrough("https://firebase.googleapis.com/**");
//    this.passthrough("https://securetoken.googleapis.com/**");
//  },
//});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
