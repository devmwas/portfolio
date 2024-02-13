import React from "react";

function Skills() {
  return (
    <div>
      <div>Skills</div>

      {/* Frontend Development Technologies */}
      <div>
        <div className="font-bold text-xl">Frontend Development</div>
        <div>ReactJS</div>
        <div>Redux and Redux Toolkit</div>
        <div>Material UI</div>
        <div>TailwindCSS</div>
        <div>Framer Motion</div>
      </div>

      {/* Backend Development Technologies */}
      <div>
        <div className="font-bold text-xl">Backend Development</div>
        <div>Firebase Realtime Database</div>
        <div>Firebase Firestore Database</div>
        <div>Node JS</div>
        <div>Mongo DB</div>
        <div>Express</div>
        <div>Django</div>
      </div>

      {/* Python Programming Technologies */}
      <div>
        <div className="font-bold text-xl">Python Programming</div>
        <div>
          <div>Django</div>
          <div>Pandas</div>
          <div>NumPy</div>
          <div>Selenium</div>
        </div>
      </div>

      {/* Git and GitHub Development Technologies */}
      <div className="font-bold text-xl">
        <div>Git and GitHub Development</div>
        <div>
          <div>Deployment of Static Pages to GitHub Pages</div>
          <div>Software Development Collaboration on GitHub</div>
        </div>
      </div>

      {/* Deployment Technologies */}
      <div className="font-bold text-xl">
        <div>Deployment</div>
        <div>
          <div>Docker</div>
          <div>Kubernetes</div>
          <div>GitHub Pages</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
