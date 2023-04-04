import React from 'react'

function PracticalExpOut( {practicalExp} ) {
  return (
    <>
        <div className='pract-exp-info'>
            <h4>PRACTICAL EXPERIENCE</h4>
            <span>{practicalExp.initialYear} - {practicalExp.lastYear} {practicalExp.company}</span>
            <span>{practicalExp.position}</span>
        </div>
    </>
  )
}

export default PracticalExpOut