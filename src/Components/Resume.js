import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;

    const education = [{
      degree: "LSTA Degree , Full-Stack Dev",
      description: "Graduated with First Class Honours",
      graduated: "July 2021",
      school: "LSTA Developement Informatique SidiYossef - Morroco"
    }]

    var edu = education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>Skills</h3>
          <p className="info">
            One of the founders
            <span>&bull;</span> <em className="date">May 2021 - present</em>
          </p>
          <p>Build the application for the clients and our own projects</p>
        </div>
      );
    });
   const languages = [
    {name: "ReactJs", level: "90%"},
    {name: "NextJs", level: "85%"},
    {name: "TailwindCss", level: "84%"},
    {name: "C#", level: "85%"},
    {name: "Git", level: "70%"},
    {name: "JavaScript", level: "99%"},
    {name: "Web Development", level: "95%"},
   ]
    var skills = languages.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{edu}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
