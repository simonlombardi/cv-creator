import React, { useState } from 'react'

function FormLenguages( {data, infoLanguage, infoLevel} ) {
    const [languagesForms, setLanguagesForms] = useState([{language:"", level:""}])

    function addLanguageForm(){
        const newObjForm = {
            language:"",
            level:""
        }
        setLanguagesForms([...languagesForms, newObjForm])
    }

  return (
        <div className='container-info'>
            {languagesForms.map(languageForm =>
            <> 
                <h2>Languages</h2>
                <input placeholder='Enter a languaje' onChange={infoLanguage} value={data.language} ></input>
                <select onChange={infoLevel} value={data.level} >
                    <option selected>
                        Enter the level
                    </option>
                    <option>
                        native
                    </option>
                    <option>
                        A1
                    </option>
                    <option>
                        A2
                    </option>
                    <option>
                        B1
                    </option>
                    <option>
                        B2
                    </option>
                    <option>
                        C1
                    </option>
                    <option>
                        C2
                    </option>
                </select>
            </>)}

            <button onClick={addLanguageForm}>Add Language</button>
        </div>    
  )
}

export default FormLenguages