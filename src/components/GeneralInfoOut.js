import React from 'react'
import LanguageOut from './LanguageOut'

function GeneralInfoOut( {generalInfo, language} ) {
  function formatDate(generalInfo){
    let año = generalInfo.dateOfBirth.slice(0,4)
    let mes = generalInfo.dateOfBirth.slice(5,7)
    let dia = generalInfo.dateOfBirth.slice(8,)
    let date = `${dia}/${mes}/${año}`
    return date
  }

  return (
    <>
      <div className='header-output'>
          <span className='name'>{(generalInfo.name).toUpperCase()}</span>
          <span className='title'>{(generalInfo.title).toLowerCase()}</span>
      </div>
      <div className='vertical-output'>
        <div className='general-info-output'>
          <h4>GENERAL INFORMATION</h4>
          <span>{generalInfo.name}</span>
          <span>{formatDate(generalInfo)}</span> 
          <span>{generalInfo.city}</span>
        </div>
        <div>
          <LanguageOut language={language} />
        </div>
      </div>
    </>
  )
}

export default GeneralInfoOut