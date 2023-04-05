import React from "react";
import ProBox from "./ProBox";
import Inexpert from "../assets/inexpert.png";
import Resumemaker from "../assets/resumemaker.png";
import Trausic from "../assets/Trausic.png";
import Ngo from "../assets/Ngo.png";

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
              <ProBox
                img={Inexpert}
                title="Fresher Jobs"
                description="An Inexpert website is an online platform that allows users to find fresher jobs in all over the world. The website provides an interface for searching, comparing, and reserving jobs."
                techno1="JavaScript"
                techno2="CSS"
                code="https://github.com/imvenkatesanc/inexpert"
                demo="https://imvenkatesanc.github.io/inexpert/"
                scrollY="-10%"
                icon=""
              />

              <ProBox
                img={Resumemaker}
                title="Resume Maker"
                description="Professionals and students to make their curriculam vitae on this platform easily with no-cost"
                techno1="JavaScript"
                techno2="CSS"
                code="https://github.com/imvenkatesanc/resumemaker"
                demo="https://imvenkatesanc.github.io/resumemaker/"
                scrollY="-10%"
                icon=""
                cName="reversed-proj"
              />

              <ProBox
                img={Trausic}
                title="Trausic jobs"
                description="A Trausic website is a comprehensive resource for traditional music users to get jobs information, class schedules, membership options, and tools to help users achieve their ecomomic goals."
                techno1="React"
                techno2="Tailwind CSS"
                code="https://github.com/imvenkatesanc/trausic"
                demo="https://trausic.netlify.app/"
                scrollY="-10%"
                icon=""
              />

              <ProBox
                img={Ngo}
                title="NGO Site"
                description="With a focus on simplicity and clean design, this site prioritize user experience, making it easy for clients to find about this organization and donate the money they need."
                techno1="JavaScript"
                techno2="Vanilla CSS"
                code="https://github.com/imvenkatesanc/responsive_site_try"
                demo="https://imvenkatesanc.github.io/responsive_site_try/"
                scrollY="-10%"
                icon=""
                cName="reversed-proj"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
