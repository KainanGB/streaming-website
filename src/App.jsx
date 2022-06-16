import { HomePage } from "./pages/Home/HomePage";
import { ProductList } from "./pages/Products/ProductsList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/products" element={<ProductList />} />
    </Routes>
  );
}

export default App;
