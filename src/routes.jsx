import { Route, Routes as Switch } from "react-router-dom";

import { HomePage } from "../src/pages/Home/HomePage";
import { Login } from "../src/pages/Login/";
import { Register } from "../src/pages/Register";
import { ProductList } from "../src/pages/Products/ProductsList";
import { Cart } from "../src/pages/Cart/Cart";

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
    </Switch>
  );
}
