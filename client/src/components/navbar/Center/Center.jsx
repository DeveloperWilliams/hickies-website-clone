import React from "react";
import "./Center.css";
import { Link } from "react-router-dom";

function Center() {
  return (
    <>
      <div className="center">
        <Link className="quiz">CUSTOM FIT QUIZ</Link>
        <p>SHOP ALL</p>
        <h2>SHOPPIEE</h2>
        <Link>LEARN</Link>
        <p>HELP</p>
      </div>
    </>
  );
}

export default Center;
