import { useState } from "react";
import '../styles/cv.css'

import "../styles/workExp.css"
import AddWorkExp from "./workExp.jsx";
import { AddSkills } from "./skillAdd.jsx";
import Cv from "./cv.jsx";


function FormForEdit() {

  //all the inputs 
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
const [phone, setPhone] = useState()
const [school, setSchool] = useState('')
const [degre, setDegre] = useState('')
const [gradYear, setGradYear] = useState('')

const fullName = `${firstName} ${lastName}`

function handleGradYear (e) {
  setGradYear(e.target.value)
}

function handleDegre (e) {
  setDegre(e.target.value)
}


function handleSchool (e) {
  setSchool(e.target.value)
}

function handlePhone (e) {
  setPhone(e.target.value)
}

function handleEmail(e) {
  setEmail(e.target.value)
}

function handleFirstName(e) {
  setFirstName(e.target.value)
}

function handleLastName(e) {
  setLastName(e.target.value)
}


//add work and skills
  const [workExpForms, setWorkExpForm] = useState([])
  const [skills, setSkill] = useState([])


  const handleWorkExpChange = (id, field, value) => {
    setWorkExpForm(prevForms =>
      prevForms.map(form => form.id === id ? { ...form, [field]: value } : form)
    );
  }
  

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

  
  const handleSkillChange = (id, value) => {
    setSkill(prevSkills =>
      prevSkills.map(skill => skill.id === id ? { ...skill, value: value } : skill)
    );
  };

  const handleAddSkill = () => {
    setSkill([...skills, { id: Date.now(), value: '' }]);
  };

const handleDeleteSkill = (index) => {
  setSkill(skills.filter((skill) => skill.id !== index))
}



    return (
      <div className="container"> 
      <div className='formEdit'> 
        <form>
          <h2>Personal Information</h2>
          <div className='form-group'>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' id='firstName' name='firstName' className='form-control' onChange={handleFirstName}/>
          </div>
  
          <div className='form-group'>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' id='lastName' name='lastName' className='form-control' onChange={handleLastName}/>
          </div>
  
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' className='form-control' onChange={handleEmail}/>
          </div>
  
          <div className='form-group'>
            <label htmlFor='phone'>Phone Number</label>
            <input type='tel' id='phone' name='phone' className='form-control' onChange={handlePhone}/>
          </div>
  
          <h2>Education</h2>
          <div className='form-group'>
            <label htmlFor='school'>School/University</label>
            <input type='text' id='school' name='school' className='form-control' onChange={handleSchool}/>
          </div>
  
          <div className='form-group'>
            <label htmlFor='degree'>Degree</label>
            <input type='text' id='degree' name='degree' className='form-control' onChange={handleDegre}/>
          </div>
  
          <div className='form-group'>
            <label htmlFor='graduationYear'>Graduation Year</label>
            <input type='number' id='graduationYear' name='graduationYear' className='form-control' onChange={handleGradYear}/>
          </div>

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
  <AddSkills key={skill.id} index={index + 1} skill={skill} deleteWork={() => handleDeleteSkill(skill.id)} handleInputChange={(e) => handleSkillChange(skill.id, e.target.value)}/>
))} 



  <button type='button' className='workExpBtn' onClick={handleAddSkill}>Add skill </button>
        
         
        </form>




      </div>
      <Cv
        fullName={fullName}
        email={email}
        school={school}
        graduationYear={gradYear}
        phoneNumber={phone}
        degre={degre}
        workExp={workExpForms}
        skills={skills}
      />
     
      </div>
    );
  }


  
  
  export default FormForEdit;