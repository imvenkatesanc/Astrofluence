import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <h3>
            Copyright © {new Date().getFullYear()}. All rights reserved.
          </h3>
          <div className="footer-socials">
            <a
              aria-label="linkedin"
              href="https://www.linkedin.com/in/imvenkatesanc/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              aria-label="github"
              href="https://github.com/imvenkatesanc"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
