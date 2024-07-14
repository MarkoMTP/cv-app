import { useState } from "react";
import '../styles/cv.css'
import "../styles/workExp.css"
import AddWorkExp from "./workExp.jsx";
import { AddSkills } from "./skillAdd.jsx";
import { DisplayEducation, AddEducation } from "./education.jsx";
import Cv from "./cv.jsx";

function FormForEdit() {
  // all the inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setSubmitted(false);
  };

  const fullName = `${firstName} ${lastName}`;

  // Handlers for personal information
  function handleInputChange(e, setState) {
    setState(e.target.value);
  }

  // Work experience state
  const [workExpForms, setWorkExpForm] = useState([]);
  const [skills, setSkill] = useState([]);

  // Handlers for work experience
  const handleWorkExpChange = (id, field, value) => {
    setWorkExpForm(prevForms =>
      prevForms.map(form => form.id === id ? { ...form, [field]: value } : form)
    );
  };

  const handleAddForm = () => {
    setWorkExpForm([...workExpForms, {
      id: Date.now(),
      company: '',
      jobTitle: '',
      jobDescription: '',
      startDate: '',
      endDate: ''
    }]);
  };

  const handleDeleteForm = (id) => {
    setWorkExpForm(workExpForms.filter((form) => form.id !== id));
  };

  // Handlers for skills
  const handleSkillChange = (id, value) => {
    setSkill(prevSkills =>
      prevSkills.map(skill => skill.id === id ? { ...skill, value: value } : skill)
    );
  };

  const handleAddSkill = () => {
    setSkill([...skills, { id: Date.now(), value: '' }]);
  };

  const handleDeleteSkill = (id) => {
    setSkill(skills.filter((skill) => skill.id !== id));
  };

  // Handlers for education
  const [educations, setEducation] = useState([]);

  const handleAddEducation = () => {
    setEducation([...educations, {
      id: Date.now(),
      school: '',
      degree: '',
      gradYear: ''
    }]);
  };

  const handleDeleteEducation = (id) => {
    setEducation(educations.filter((education) => education.id !== id));
  };

  const handleEducationChange = (id, field, value) => {
    setEducation(prevEducations => prevEducations.map(education => education.id === id ? { ...education, [field]: value } : education));
  };

  return (
    <div className="container">
      {!isSubmitted ?
        
          <form className="formEdit">
            <h2>Personal Information</h2>
            <div className='form-group'>
              <label htmlFor='firstName'>First Name</label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                className='form-control'
                value={firstName}
                onChange={(e) => handleInputChange(e, setFirstName)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='lastName'>Last Name</label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                className='form-control'
                value={lastName}
                onChange={(e) => handleInputChange(e, setLastName)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                className='form-control'
                value={email}
                onChange={(e) => handleInputChange(e, setEmail)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='phone'>Phone Number</label>
              <input
                type='tel'
                id='phone'
                name='phone'
                className='form-control'
                value={phone}
                onChange={(e) => handleInputChange(e, setPhone)}
              />
            </div>
            <h2>Education</h2>
            {educations.map((education, index) => (
              <AddEducation
                key={education.id}
                index={index + 1}
                education={education}
                handleInputChange={(e) => handleEducationChange(education.id, e.target.name, e.target.value)}
                deleteEducation={() => handleDeleteEducation(education.id)}
              />
            ))}
            <button type='button' className='workExpBtn' onClick={handleAddEducation}>Add Education</button>
            <h2>Work Experience</h2>
            {workExpForms.map((form, index) => (
              <AddWorkExp
                key={form.id}
                index={index + 1}
                workExperience={form}
                handleInputChange={(e) => handleWorkExpChange(form.id, e.target.name, e.target.value)}
                deleteWork={() => handleDeleteForm(form.id)}
              />
            ))}
            <button type='button' className='workExpBtn' onClick={handleAddForm}>Add Work Experience</button>
            <h2>Skills</h2>
            {skills.map((skill, index) => (
              <AddSkills
                key={skill.id}
                index={index + 1}
                skill={skill}
                deleteWork={() => handleDeleteSkill(skill.id)}
                handleInputChange={(e) => handleSkillChange(skill.id, e.target.value)}
              />
            ))}
            <button type='button' className='workExpBtn' onClick={handleAddSkill}>Add skill</button>
            <br />
            <button type='button' className='submitBtn' onClick={handleSubmit}>Submit</button>
          </form>
     
        : (
         
            <Cv
              fullName={fullName}
              email={email}
              phoneNumber={phone}
              educations={educations}
              workExp={workExpForms}
              skills={skills}
              handleEdits={handleEdit}
            />
        )}
    </div>
  );
}

export default FormForEdit;
