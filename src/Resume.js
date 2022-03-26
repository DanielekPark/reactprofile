import React from 'react';
import {volunteerData, workData, projectsData} from './data/Data';

const Resume = () => {
  const [volunteer, setVolunteerData] = React.useState(volunteerData);
  const [work, setWorkData] = React.useState(workData);
  const [projects, setProjectsData] = React.useState(projectsData); 

 return (
  <div>
   <h2 className="header statement">I am a front end developer seeking to build and improve websites to make people’s lives easier through technology.</h2>
    <div className="skills-container">
      <>
        <h2>Skills</h2>
        <ul className="bp-pts">
          <li>HTML, CSS, JavaScript</li>
          <li>Git, Github</li>
          <li>SCSS/SASS</li>
          <li>Bootstrap</li>
          <li>Mongoose.js</li>
          <li>Express.js</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Typescript</li>
          <li>CSS Tailwind</li>
          {/* <li>SQL</li> */}
        </ul>
      </>
    </div>

   <h2 className="resume">Volunteer Experience</h2>
      {volunteer.map((item) => {
        const {id, link, title, date, li1, li2, li3, li4} = item; 
        return (
          <ul className="bp-pts" key={id}>
            <li><b><i>{title}</i></b> <a href={link} target="_blank" rel="noreferrer">Site</a></li>
            <li>{date}</li>
            <li>{li1}</li>
            <li>{li2}</li>
            <li>{li3}</li>
            <li>{li4}</li>
          </ul>  
        )
      })}

    <h2 className="resume">Work Experience</h2>
      {work.map((item) => {
        const {id, title, date, li1, li2} = item; 
        return (
          <ul className="bp-pts" key={id}>
            <li><b><i>{title}</i></b></li>
            <li>{date}</li>
            <li>{li1}</li>
            <li>{li2}</li>
          </ul>  
        )
      })}

    <h2 className="resume">Projects</h2>
      {projects.map((item) => {
        const {id, title, link, desc, li1, li2} = item; 
        return (
          <ul className="bp-pts bold" key={id}>
            <li>{title} <a className="link" href={link} target="_blank" rel="noreferrer">Site</a></li>
            <li>{desc}</li>
            <li>{li1}</li>
            <li>{li2}</li>
          </ul>  
        )
      })}
      
      <ul className="bp-pts bold">
        <li>Student Pagination <a className="link" href="https://danielekpark.github.io/pagination/" target="_blank" rel="noreferrer">Site</a></li>
        <li>An application built with HTML, CSS, and Javascript that displays a list of people with their name and information</li>
        <li>A responsive website with improved interactivity, enables users to view a different set of results of people with button clicks</li>
      </ul>  

    <h3>Certification: <a className="certification" href="https://www.credential.net/fc32925c-3dd6-4c5d-926c-f6034e66be80" target="_blank" rel="noreferrer">Team Treehouse Front End Techdegree</a></h3>
    
    <h3>Coursework: HTML, CSS, Responsive mobile design, Sass, Git, Github, Jquery, Javascript, DOM, Ajax, CSS Bootstrap.</h3>
  </div>
 );
}

export default Resume; 