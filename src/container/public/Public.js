import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";

function Public() {
  return (
    <div className="h-screen">
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Public;
