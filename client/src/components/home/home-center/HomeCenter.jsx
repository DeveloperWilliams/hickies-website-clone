import React from "react";
import "./HomeCenter.css";
import { Link } from "react-router-dom";

function HomeCenter() {
  return (
    <>
      <div className="home-center">
        <div className="top">
          <div className="content">
            <div className="div-better">
              <h5 className="better">
                Better than <br /> shoelaces <br /> or your $$ <br /> back
              </h5>
              <Link>Our Promise</Link>
            </div>
            <div>
              <h5>The Perfect Fit Always</h5>
              <p>
                Designed to make your sneakers insanely comfortable slip-ons
                that always stay in place.
              </p>
            </div>
            <div>
              <h5>Comfort You Can Choose in Every Step</h5>
              <p>
                Strong. Flexible. Comfortable. Easy. HICKIES laces are designed
                to be fastened only once so you can get out there and do stuff
                already.
              </p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <h2>Go Tie-Free For All Your Needs</h2>
          <div className="holder">
            <div>
              <div>
                <img src="./icon/time.avif" alt="img" />
              </div>
              <h6>CONVENIENCE</h6>
              <p>
                Running late? Get out the door quick. No strings, no
                interruptions
              </p>
            </div>
            <div>
              <div>
                <img src="./icon/gym.png" alt="img" className="gym" />
              </div>
              <h6>WORKING OUT</h6>
              <p>Never stop your race, game or workout for untied laces</p>
            </div>
            <div>
              <div>
                <img src="./icon/pln.webp" alt="img" />
              </div>
              <h6>TRAVEL</h6>
              <p>Slip off, slip on. Zip through airport security in a flash.</p>
            </div>
            <div>
              <div>
                <img src="./icon/shoe.avif" alt="img" />
              </div>
              <h6>ACCESSIBILITY</h6>
              <p>Transform shoes into hassel free slip-ons for all.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCenter;
