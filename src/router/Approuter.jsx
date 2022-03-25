// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/login/Login";
import Navbar from "../components/navbar/myNavbar";
// import Recipe from "../components/recipe/Recipe"

import { BrowserRouter } from "react-router-dom";

const Approuter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>

        <Route path="/about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>
        {/* <Route path="/recipe" element={<PrivateRouter />}>
          <Route path="" element={<Recipe />} />
        </Route> */}

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;
