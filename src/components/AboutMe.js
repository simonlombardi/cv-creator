import React from 'react'

function AboutMe( {data, infoAboutMe} ) {
  return (
    <>
        <div className='container-info'>
            <textarea placeholder='About Me' onChange={infoAboutMe} value={data} maxLength="337">
            </textarea>
        </div>
    </>
  )
}

export default AboutMe