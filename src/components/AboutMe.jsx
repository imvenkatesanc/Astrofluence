import AboutImg from "../assets/about-us_people.png";
import RoundedText from "../assets/text2.png";
import WorkingEmoji from "../assets/flame.svg";

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
              <h4>About US</h4>
              <h3>
                Your gateway to the influencer economy
              </h3>
              <p>
                Astrofluence enables brands and marketers to effortlessly scale omnichannel influencer
                marketing globally through the first ever real-time data-driven influencer economy.
              </p>
              <br/>
              <h3>
              Empowering brands to unlock the full potential of the influencer marketing
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
