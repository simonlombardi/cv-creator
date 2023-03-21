import React from 'react'

function EducationForm() {
  return (
    <div className="container-info">
        <h2>Educational Experience</h2>
        <input placeholder="Enter the school name" type="text" />
        <input placeholder="Enter the title of study" type="text" />
        <input placeholder="Enter the year of beginning of study" type="number" min="1900" max="2023" step="1"  />
        <input placeholder="Enter the year of study completion" type="number" min="1900" max="2023" step="1"  />
    </div>
  )
}

export default EducationForm

