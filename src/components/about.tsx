import React from 'react'
import Title, { SubTitle } from './title'

const About = () => {
    return (
      <div className="section-width min-h-screen">
        <Title title="About us" className='inline' />
        <div className='flex-1 h-full items-center' >
          {/* About description */}
          <div className='flex flex-col items-center justify-center'>
            <SubTitle title="Why choose us?" />
          </div>

          {/* About 4 main points  */}
          <div>

          </div>
        </div>
      </div>
    );
}

export default About
