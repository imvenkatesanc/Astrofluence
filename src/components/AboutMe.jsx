import AboutImg from "../assets/about-img.webp";
import RoundedText from "../assets/text2.svg";
import WorkingEmoji from "../assets/working-emoji.png";

function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
              <img src={AboutImg} alt="mee" className="img-side__main-img" />
              <span>
                <img src={RoundedText} alt="text" />
              </span>
            </div>
            <div className="text-side">
              <h4>About me</h4>
              <h3>
                A dedicated Front-end Developer <br /> based in Chennai, India
                📍
              </h3>
              <p>
              As a junior front-end developer, I possess an impressive arsenal.
              of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
              excel in designing and maintaining responsive websites that
              offer a smooth user experience. My expertise lies in crafting
              dynamic, engaging interfaces through clean, optimised writing
              code and utilising cutting-edge development tools and
              techniques. I am also a team player who thrives on collaborating.
              with cross-functional teams to produce outstanding web
              applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
