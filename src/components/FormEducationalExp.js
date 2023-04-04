import React, { useState } from "react";

let id = 0;
export default function FormEducationalExp({data, infoSchoolName, infoTitleSchool, infoInitialYear, infoLastYear}){
    const [educationForms, setEducationForms] = useState([{id:id, school:"", title:"", initialYear:"", finishYear:"" }]);

    function addEducationForm(){
        id++
        const newEduForm = {
            id:id,
            school:"",
            title:"",
            initialYear:"",
            finishYear:""
        }
        setEducationForms([...educationForms, newEduForm])
    }

    return(
        <div className="container-info">
            {educationForms.map(educationForm => 
                <>
                    <h2>Educational Experience</h2>
                    <input placeholder="Enter the school name" type="text" onChange={infoSchoolName} value={data.schoolName} />
                    <input placeholder="Enter the title of study" type="text" onChange={infoTitleSchool} value={data.title} />
                    <input placeholder="Enter the year of beginning of study" type="number" min="1900" max="2023" step="1"  onChange={infoInitialYear} value={data.initialYear} />
                    <input placeholder="Enter the year of study completion" type="number" min="1900" max="2023" step="1"  onChange={infoLastYear} value={data.lastYear} />
                </>
            )}
            <button onClick={addEducationForm}>Add more educational experience</button>
        </div>
    );
}