import React, { useState } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pajes/Home";
import About from "./pajes/About";
import Contact from "./pajes/Contact";
import Cart from "./pajes/Cart";

const App = () => {
  const[cart,setCart] = useState(10)
  return (
    <div className="container">
      <Header cart={cart}/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
