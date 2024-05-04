import { React, useState } from "react";
import { Link } from "react-router-dom";
import Hero from './Hero';
import AboutMe from './AboutMe';
import Trynow from './Trynow';
import Product from './Product';
import Contact from './Contact';
import Footer from './Footer';

function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  return (
    <>
      <nav>
        <h3 onClick={pageUp} className="logo">
          <img src='src/assets/flame.svg' alt="Logo" />
          Astrofluence
        </h3>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#product">Product</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <Link to="/whoyouare"><a className="nav-button">Try now!</a></Link>
          </li>
          <li onClick={() => hamburgerMenu()}>
            <i className="fa-solid fa-bars-staggered mobile-menu"></i>
          </li>
        </ul>
      </nav>

      {/* mobile nav */}
      <div className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}>
        <span onClick={() => hamburgerMenu()}>
          <i className="fa-solid fa-xmark"></i>
        </span>

        <ul>
          <li onClick={() => hamburgerMenu()}>
            <a href="#home">Home</a>
          </li>

          <li onClick={() => hamburgerMenu()}>
            <a href="#about">About</a>
          </li>

          <li onClick={() => hamburgerMenu()}>
            <a href="#product">Product</a>
          </li>

          <li onClick={() => hamburgerMenu()}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <Hero/>
      <AboutMe/>
      <Trynow/>
      <Product/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default Navbar;
