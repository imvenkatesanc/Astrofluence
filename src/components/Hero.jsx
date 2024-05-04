import React from 'react';
import Slider from "./Slider";


function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1><b>First ever &nbsp;</b>real-time data driven influencer economy</h1>
                <p>
                Astrofluence offers self-serve end-to-end influencer marketing technology that delivers high ROI and omnichannel scale effortlessly. 📍
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/imvenkatesanc/"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.github.com/imvenkatesanc"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </span>
              </div>

              <div className="hero-img"></div>
            </div>

            {/*  */}
            <div className="skills">
              <div className="logos">
                <Slider/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
