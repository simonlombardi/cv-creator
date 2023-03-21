import React from "react";

export default function FromGeneralInformation( {infoName, infoEmail, infoTel, infoDateOfBirth} ){

    return(
        <div className="container-info">
            <h2>General Information</h2>
            <input placeholder="Enter your full name" type="text" onChange={infoName} />
            <input placeholder="Enter your email" type="email" onChange={infoEmail} />
            <input placeholder="Enter your phone number" type="tel" onChange={infoTel} />
            <input placeholder="Enter your date of birth" type="date" onChange={infoDateOfBirth} />
        </div>

    );
    
}