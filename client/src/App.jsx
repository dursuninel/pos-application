import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Index";
import Cart from "./components/Pages/Cart/Index";
import Bill from "./components/Pages/Bill/Index";
import Customer from "./components/Pages/Customer/Index";
import Statistic from "./components/Pages/Statistic/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/bills" element={<Bill />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/statistic" element={<Statistic />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
