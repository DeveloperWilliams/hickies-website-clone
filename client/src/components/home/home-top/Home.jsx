import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home">
        <div>
          <h1>
            Never Tie, <br /> Never Stop
          </h1>
        </div>
        <div className="home-link">
          <Link className="get">Get Started</Link>
          <Link className="shop">Shop HICKIES Laces</Link>
        </div>
      </div>
    </>
  );
}

export default Home;
