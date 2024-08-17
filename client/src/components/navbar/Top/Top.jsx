import React from "react";
import "./top.css";
import { Link } from "react-router-dom";

function Top() {
  return (
    <>
      <div className="nav-top">
        <p>FREE U.S. SHIPPING ON ORDERS OVER $50</p>
        <Link>MY ACCOUNT</Link>
      </div>
    </>
  );
}

export default Top;
