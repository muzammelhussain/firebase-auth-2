import React from "react";
import NavBar from "../../Component/NavBar";
import Footer from "../../Component/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
