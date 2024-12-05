import React from 'react';
import worktime from '../assests/images/Time management-amico 1.svg';

function Experience() {
  return (
    <div className="experience common-spacing bg-gradient">
      <h3 className="heading text-center">My Experience</h3>
      <div className="d-flex flex-wrap align-items-center">
        <div className="content col-lg-6">
          <div className="organisation-column">
            <div className="organisation-item">
              <h4 className="heading-organised">Frontend Developer</h4>
              <span className="organisation">at Sparks Foundation</span>
              <h5 className="skills">Skills: HTML, CSS, JS</h5>
            </div>

            <div className="organisation-item">
              <h4 className="heading-organised">Java Full Stack Developer</h4>
              <span className="organisation">at ABM Fintech</span>
              <h5 className="skills">Skills: Java, Spring Boot, JDBC, Hibernate, JSP, Servlet</h5>
            </div>

            <div className="organisation-item">
              <h4 className="heading-organised">Full Stack Developer</h4>
              <span className="organisation">at BrainyDx</span>
              <h5 className="skills">Skills: HTML, CSS, JS, Bootstrap, MUI, ReactJS, WordPress</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <img src={worktime} alt="Time Management" className="w-75 rounded" />
        </div>
      </div>
    </div>
  );
}

export default Experience;
