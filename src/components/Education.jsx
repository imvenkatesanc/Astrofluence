import React from 'react';
import '../styles/Education.css';
import ClgImg from '../assets/clg.jpg';

function Education() {
  return (
    <>
      <section className="education" id="education">
        <div className="container">
          <div className="education-content">
            <div className="img-side">
              <img src={ClgImg} alt="clgimg" className="img-side__main-image" />
            </div>
            <div className="text-sid">
              <h4>Education</h4>
              <h3>
              B.Tech<br/>Information Technology
              </h3>
              <p>
              M.A.M College Of Engineering<br/>Trichy, India.
              📍
              </p>
              <p><strong>Duration: </strong> 4 years /-</p>
              <p><strong>CGPA : </strong> 7.97</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
