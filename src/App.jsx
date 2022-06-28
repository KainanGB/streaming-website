import { BrowserRouter } from "react-router-dom";

import { Routes } from "./routes";
import { CartProvider } from "./hooks/useCart";

import GlobalCSS from "./global/global";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./hooks/useAuth";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <GlobalCSS />
          <ToastContainer autoClose={3000} />
          <Routes />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
