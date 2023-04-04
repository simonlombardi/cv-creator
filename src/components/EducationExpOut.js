import React from 'react'

function EducationExpOut( {educationalExp} ) {
    console.log(educationalExp.schoolName)
  return (
    <>
      <div className='edu-exp-info'>
        <h4>EDUCATIONAL EXPERIENCE</h4>
        <span>{educationalExp.initialYear} - {educationalExp.lastYear} {educationalExp.schoolName}</span>
        <span>{educationalExp.title}</span>
      </div>
    </>
  );
}

export default EducationExpOut