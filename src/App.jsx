import { HomePage } from "./pages/Home/HomePage";
import { ProductList } from "./pages/Products/ProductsList";
import { Routes, Route } from "react-router-dom";
import { Cart } from "./pages/Cart/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
