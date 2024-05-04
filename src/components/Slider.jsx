import React from 'react';
import Partner1 from '../assets/partners/Partner1.svg';
import Partner2 from '../assets/partners/Partner2.svg';
import Partner3 from '../assets/partners/Partner3.svg';
import Partner4 from '../assets/partners/Partner4.svg';
import Partner5 from '../assets/partners/Partner5.svg';
import Partner6 from '../assets/partners/Partner6.svg';
import Partner7 from '../assets/partners/Partner7.png';
import Partner8 from '../assets/partners/Partner8.png';
import Partner9 from '../assets/partners/Partner9.png';
import Partner10 from '../assets/partners/Partner10.svg';
import Partner11 from '../assets/partners/Partner11.svg';
import Partner12 from '../assets/partners/Partner12.png';
import Partner13 from '../assets/partners/Partner13.png';
import Partner14 from '../assets/partners/Partner14.svg';
import Partner15 from '../assets/partners/Partner15.png';
import Partner16 from '../assets/partners/Partner16.svg';
import Partner17 from '../assets/partners/Partner17.svg';
import Partner18 from '../assets/partners/Partner18.png';
import Partner19 from '../assets/partners/Partner19.svg';
// Import other partner images as needed

function Slider() {
  const animationSpeed = "40s"; // Define animation speed

  return (
    <div>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-250px * 7))}
          }

          .slider {
            height: 100px;
            overflow: hidden;
            position: relative;
            max-width: 107rem;
            margin: 0 auto;
            padding: 0 4rem;
          }
          
          .slider .slide-track {
            animation: scroll ${animationSpeed} linear infinite;
            display: flex;
            width: calc(250px * 14);
          }

          .slider .slide {
            height: 100px;
            width: 250px;
          }
        `}
      </style>
      <div className="slider">
        <div className="slide-track">
          {[Partner1, Partner2, Partner3, Partner4,Partner5,Partner6,Partner7,Partner8,Partner9,Partner10,
          Partner11,Partner12,Partner13,Partner14,Partner15,Partner16,Partner17,Partner18,Partner19].map((partner, index) => (
            <div className="slide" key={index}>
              <img
                src={partner}
                height="100"
                width="250"
                alt={`Partner ${index + 1}`}
              />
            </div>
          ))}
          <div className="slide">
            <img
              src={Partner1}
              height="100"
              width="250"
              alt="Partner 1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
