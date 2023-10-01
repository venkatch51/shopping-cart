import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;
