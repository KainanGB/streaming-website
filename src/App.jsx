import { HomePage } from "./pages/Home/HomePage";
import { ProductList } from "./pages/Products/ProductsList";
import { Routes, Route } from "react-router-dom";
import { Cart } from "./pages/Cart/Cart";
import { Login } from "./pages/Login";
import Register from "./components/Register";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
