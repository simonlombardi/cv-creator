import React, { useState } from "react";
import PracticalForm from "./PracticalForm";

let id = 0;
export default function FormPracticalExp(){

    const [practicalForms, setPracticalForms] = useState([{id: id, company:"", position: "", initialYear:"", finishYear:""}])

    function addPracticalExperience(){
        id++
        const newPracicalExperienceForm = {
            id: id,
            company:"",
            position: "",
            initialYear:"", 
            finishYear:""
        }
        setPracticalForms([...practicalForms, newPracicalExperienceForm])
    }

    return(
        <div className="container-info">
            {practicalForms.map(practicalForm => 
                <PracticalForm key={practicalForm.id} />)}
            <button onClick={addPracticalExperience}>Add more practical experience</button>
        </div>
    );
}