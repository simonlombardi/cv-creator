import React from 'react'

function LanguageOut( { language } ) {
  return (
    <>
        <div className='languages-output'>
            <h4>LANGUAGES</h4>
            <span>{language.language} ({language.level})</span>
        </div>
    </>
  )
}

export default LanguageOut