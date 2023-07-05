import React from "react";
import { GlobalStyles } from "../styles/globalstyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/login";
import Home from "./home";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
