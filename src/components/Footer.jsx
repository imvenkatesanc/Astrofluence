function Footer() {
    return (
      <>
        <footer>
          <div className="container">
            <div className="footerc">
              <h3>
                Copyright © {new Date().getFullYear()}. All rights are reserved
              </h3>
              <div className="footerc__socials">
                <a
                  aria-label="linkedin"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/imvenkatesanc/"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  aria-label="github"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/imvenkatesanc"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;
