import React from 'react'

function AboutMeOut( {aboutMe} ) {
  return (
    <>
        <div className='about-me-info'>
            <h4>ABOUT ME</h4>
            <div className='container-about-me'>
            {aboutMe}
            </div>
        </div>
    </>
  )
}

export default AboutMeOut