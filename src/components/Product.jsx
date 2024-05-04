import React from "react";
import ProBox from "./ProBox";
import Inexpert from "../assets/slide_1.png";
import Resumemaker from "../assets/slide_2.png";
import Trausic from "../assets/slide_3.png";
import Ngo from "../assets/slide_4.png";

function Product() {
  return (
    <>
      <section id="product" className="project">
        <div className="container">
          <div className="project-content">
            <p>Product</p>
            <h3>Unlock the power of Influencer economy 🧩</h3>
            <div className="projects-grid">
              <ProBox
                img={Inexpert}
                title="Overview of Influencer economy"
                description="Tap into new-to-the-world influencer marketing technology that delivers powerful outcomes with low costs and high precision. Grow your brand and drive more revenue today."
                scrollY="-10%"
              />

              <ProBox
                img={Resumemaker}
                title="Real-time matchmaking"
                description="Astrofluence’s AI matchmaking algorithm looks at more niches than anything on the market to match you with the right influencers. This is the first time in the market that natural language processing is used to target influencers based on keyword searches."
                scrollY="-10%"
                cName="reversed-proj"
              />

              <ProBox
                img={Trausic}
                title="Measure your
                campaign performance
                like never before"
                description="Track the performance and impact of your influencer campaign using our comprehensive dashboards with five levels of hierarchical reports. Find actionable insights on performance metrics such as reach, impressions, views, and conversions to improve your campaign performance continually."
                scrollY="-10%"
              />

              <ProBox
                img={Ngo}
                title="Grow your brand with
                influencer marketing"
                description="The Astrofluence platform offers solutions designed to help brands of all sizes from all industries unlock the full potential of the influencer economy. Our software solutions enable you to plan, execute, optimize, and measure your influencer marketing programs."
                scrollY="-10%"
                cName="reversed-proj"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
