import React, { useState } from 'react';
import '../styles/workExp.css'

function AddWorkExp({ index, workExperience, handleInputChange, deleteWork }) {
  return (
    <div className="form-group" id={index}>
      <h2>Number: {index}</h2>
      <div className="form-group">
        <label htmlFor={`company-${index}`}>Company</label>
        <input
          type="text"
          id={`company-${index}`}
          name="company"
          className="form-control"
          value={workExperience.company}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor={`jobTitle-${index}`}>Job Title</label>
        <input
          type="text"
          id={`jobTitle-${index}`}
          name="jobTitle"
          className="form-control"
          value={workExperience.jobTitle}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor={`jobDescription-${index}`}>Job Description</label>
        <textarea
          id={`jobDescription-${index}`}
          name="jobDescription"
          className="form-control"
          value={workExperience.jobDescription}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor={`startDate-${index}`}>Start Date</label>
        <input
          type="date"
          id={`startDate-${index}`}
          name="startDate"
          className="form-control"
          value={workExperience.startDate}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor={`endDate-${index}`}>End Date</label>
        <input
          type="date"
          id={`endDate-${index}`}
          name="endDate"
          className="form-control"
          value={workExperience.endDate}
          onChange={ handleInputChange}
        />
      </div>

      <button type='button' className='btnDelete' onClick={deleteWork}>    Delete Work Experience
      </button>

      
    </div>
  );
}




   export function WorkExpDisplay({index, company, jobTitle, jobDescription, start, end}) {

      return (
          <div>
            <h3>Number: {index + 1}</h3>
              <p><strong>Company:</strong> {company}</p>
              <p><strong>Job Title:</strong> {jobTitle}</p>
              <p><strong>Job Description:</strong> {jobDescription}</p>
      
          
              <p><strong>Start Date:</strong> {start}</p>
              <p><strong>End Date :</strong> {end}</p>
      
      
          </div>
      )
      
      
      }
      



    export default AddWorkExp