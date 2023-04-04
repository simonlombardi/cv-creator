import React from "react";

export default function FromGeneralInformation( {data, infoName, infoTitle, infoEmail, infoCity, infoTel, infoDateOfBirth} ){

    return(
        <div className="container-info">
            <h2>General Information</h2>
            <input placeholder="Enter your full name" type="text" onChange={infoName} value={data.name} />
            <input placeholder="Enter your title" type="text" onChange={infoTitle} value={data.title} />
            <input placeholder="Enter your email" type="email" onChange={infoEmail} value={data.email} />
            <input placeholder="Enter your city" type="text" onChange={infoCity} value={data.city} />
            <input placeholder="Enter your phone number" type="tel" onChange={infoTel} value={data.tel} />
            <input placeholder="Enter your date of birth" type="date" onChange={infoDateOfBirth} value={data.dateOfBirth} />
        </div>

    );
    
}