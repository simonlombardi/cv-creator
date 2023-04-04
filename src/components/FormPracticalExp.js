import React, { useState } from "react";

let id = 0;
export default function FormPracticalExp( {data, infoCompany, infoPosition, infoInitialYear, infoLastYear} ){

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
            <> 
                <h2>Practical Experience</h2>
                <input type="text" placeholder="Enter the company name" onChange={infoCompany} value={data.company}></input>
                <input type="text" placeholder="Enter the position title" onChange={infoPosition} value={data.position}></input>
                <input placeholder="Enter the year from you worked for that company" type="number" min="1900" max="2023" step="1" onChange={infoInitialYear} value={data.initialYear} />
                <input placeholder="Enter the year until you worked for that company" type="number" min="1900" max="2023" step="1"  onChange={infoLastYear} value={data.lastYear}/>
            </>)}
            <button onClick={addPracticalExperience}>Add more practical experience</button>
        </div>
    );
}