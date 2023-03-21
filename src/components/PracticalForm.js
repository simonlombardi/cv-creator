import React from 'react'

function PracticalForm() {
  return (
    <div className="container-info">
        <h2>Practical Experience</h2>
        <input type="text" placeholder="Enter the company name"></input>
        <input type="text" placeholder="Enter the position title"></input>
        <input placeholder="Enter the year from you worked for that company" type="number" min="1900" max="2023" step="1"  />
        <input placeholder="Enter the year until you worked for that company" type="number" min="1900" max="2023" step="1"  />
    </div>
  )
}

export default PracticalForm