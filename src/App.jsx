import { HomePage } from "./pages/HomePage";
import { Listing } from "./pages/Listing";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/listing" element={<Listing />} />
    </Routes>
  );
}

export default App;
