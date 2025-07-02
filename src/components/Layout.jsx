// src/components/Layout.jsx

import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { StarBackground } from "./StarBackground";

export const Layout = () => {
  return (
    <>
      <StarBackground />
      <Navbar />
      <main>
        <Outlet /> 
      </main>
    </>
  );
};