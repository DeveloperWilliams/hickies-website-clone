import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="left">
          <div>
            <div className="link-div">
              <h6>SHOP</h6>
              <div className="link">
                <Link>HICKIES Originals</Link>
                <Link>HICKIES Metalics</Link>
                <Link>HICKIES Kids</Link>
                <Link>HICKIES with Crystals</Link>
                <Link>DooHICKIES Charms</Link>
                <Link>Bundle Builder</Link>
              </div>
            </div>
            <div className="link-div">
              <h6>ABOUT</h6>
              <div className="link">
                <Link>How it Works</Link>
                <Link>About Us</Link>
                <Link>Whosale US</Link>
                <Link>Do not sell my personal information</Link>
                <Link>Terms of Service</Link>
                <Link>Refund Policy</Link>
              </div>
            </div>
            <div className="link-div">
              <h6>HELP</h6>
              <div className="link">
                <Link>Contact Us</Link>
                <Link>Orders</Link>
                <Link>Shopping & Returns</Link>
                <Link>FAQ</Link>
                <Link>Size Guide</Link>
              </div>
            </div>
            <div className="link-div">
              <h6>OUR PROGRAMS</h6>
              <div className="link">
                <Link>Student Discount</Link>
                <Link>Millitary Discount</Link>
                <Link>US Medical Discount</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mid">
          <div className="line"></div>
        </div>
        <div className="right">
          <h6>STAY IN THE KNOW</h6>
        </div>
      </div>
    </>
  );
}

export default Footer;
