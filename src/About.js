import React from 'react'
import { aboutData } from './data/Data'

const About = () => {
  const [about, setAbout] = React.useState(aboutData);
  return (
    <div>
      <h1 className='header'>About</h1>
      <h3 className="quotes">Quotes:</h3>
      <blockquote>Standing on the shoulders of giants</blockquote>
      <blockquote>There is no shame in defeat as long as the spirit is unconquered</blockquote>
      {about.map((card) => {
        const { id, desc, img } = card; 
        return (
          <React.Fragment key={id}>
              <div className='card clearfix'>
                <div className={`card-img ${img}`}></div>
                <p className='desc'>{desc}</p>
              </div>
              <br />
          </React.Fragment>
        )
      })}
    </div>
  );
};

export default About;