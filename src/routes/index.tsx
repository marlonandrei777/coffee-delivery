import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Home } from "../pages/Home";
import { Checkout } from "../pages/Checkout";
import { Success } from "../pages/Success";
import { DefaultLayout } from "../layouts/DefaultLayout";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/success" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}