import React from 'react'
import { recentData } from './data/Data'

const Home = () => {
  const [recent, setRecent] = React.useState(recentData)

  return (
    <div className='home'>
      <p className='intro'>
        Hello, I'm Daniel Park I am a front end developer living in sunny Los Angeles, California. I graduated from CSUN with a B.S. in Kinesiology (sports medicine) and I have a passion in software  development. On a side note I am a foodie. If you have any questions or are interested in what I've done, please click on the about and project pages. Please don't hesitate to contact me, I am a nice person or at least that's what my friends and my mom say. I'll try to respond as soon as I can.
      </p>

      <div>
        <h2 className='header'>Recent Activity</h2>
        {recent.map((card) => {
          const { id, desc, img } = card
          return (
            <React.Fragment key={id}>
              <div className='card clearfix'>
                {/* <img src={img} alt='img' className='card-img clearfix' /> */}
                <div className={`card-img ${img}`}></div>
                <p className='desc'>{desc}</p>
              </div>
              <br />
            </React.Fragment>
          )
        })}
      </div>
      <div className='card clearfix'>
        <div className='card-img feld' />
        <p className='desc'>I am currently developing a online resource of links for designers, frontend, and backend developers. The project contains links to sites which can accelerate and help project needs.</p>
      </div>
    </div>
  )
}

export default Home
