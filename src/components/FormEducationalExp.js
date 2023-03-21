import React, { useState } from "react";
import EducationForm from "./EducationForm";

let id = 0;
export default function FormEducationalExp(){
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
                <EducationForm key={educationForm.id}  />
            )}
            <button onClick={addEducationForm}>Add more educational experience</button>
        </div>
    );
}