import React from "react";
import "./HomeLower.css";
import { Link } from "react-router-dom";

function HomeLower() {
  return (
    <>
      <div className="home-lower">
        <div className="top">
          <div className="right">
            <h5>Shop Best Seller</h5>
            <img src="./img/black-hickies.jpeg" alt="" />
            <h5>Black Laces</h5>
            <div>
              <Link>Shop Now</Link>
            </div>
          </div>
          <div className="left">
            <img src="./img/best-sellers.webp" alt="img" />
          </div>
        </div>

        {/* <!-- bottom --> */}

        <div className="bottom">
          <p>
            "The idea of an alternative to the traditional shoelace is gaining
            traction now."
          </p>
          <div className="img-holder">
            <div>
              <img src="./icon/Forbes.avif" alt="img" />
            </div>
            <div>
              <img src="./icon/Refinery_Grey.webp" alt="img" />
            </div>
            <div>
              <img src="./icon/Shape_Grey.webp" alt="img" />
            </div>
            <div>
              <img src="./icon/Glamour_Grey.webp" alt="img" />
            </div>
            <div>
              <img src="./icon/Highsnobiety_Grey.webp" alt="img" />
            </div>
            <div>
              <img src="./icon/FootwearNews_Grey.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeLower;
