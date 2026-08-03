import type { JSX } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Providers from "./pages/Providers";
import Services from "./pages/Services";
import FAQs from "./pages/FAQs";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Dispensary from "./pages/Dispensary";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dispensary" element={<Dispensary />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;