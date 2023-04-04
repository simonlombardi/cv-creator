import React from 'react'

function ContactOut( {generalInfo} ) {
  return (
    <>
        <div className='contact-output'>
            <h4>CONTACT</h4>
            <span>{generalInfo.email}</span>
            <span>{generalInfo.tel}</span>
        </div>
    </>
  )
}

export default ContactOut