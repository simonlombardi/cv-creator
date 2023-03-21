import React, {useEffect, useState} from 'react'

function GeneralInfoOut( {generalInfo} ) {
    /* const [data, setData] = useState({})

    useEffect(() => {
        setData({...generalInfo})
        console.log(data)
    }, [generalInfo]) */
    console.log(generalInfo)
  return (
    <div className='container-output'>
        <div className='name-output'>
            {generalInfo.name}
            {generalInfo.email}
            {generalInfo.tel}
            {generalInfo.dateOfBirth}

            
        
        </div>
    </div>
  )
}

export default GeneralInfoOut