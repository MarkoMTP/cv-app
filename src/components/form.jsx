import { useState } from "react";
import "../styles/workExp.css"
import AddWorkExp, {AddSkills} from "./workExp.jsx";


function FormForEdit() {

  const [workExpForms, setWorkExpForm] = useState([])
  const [skills, setSkill] = useState([])

  const handleAddForm = () => {
    setWorkExpForm([...workExpForms, {id: Date.now() }]); 
  };
  const handleDeleteForm = (id) => {
    setWorkExpForm(workExpForms.filter((form) => form.id !== id));
  };


  const handleAddSkill = () => {
    setSkill([...skills, {id: Date.now()}])
  }

const handleDeleteSkill = (index) => {
  setSkill(skills.filter((skill) => skill.id !== index))
}



    return (
      <div className='formEdit'>
        <form>
          <h2>Personal Information</h2>
          <div className='form-group'>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' id='firstName' name='firstName' className='form-control' />
          </div>
  
          <div className='form-group'>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' id='lastName' name='lastName' className='form-control' />
          </div>
  
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' className='form-control' />
          </div>
  
          <div className='form-group'>
            <label htmlFor='phone'>Phone Number</label>
            <input type='tel' id='phone' name='phone' className='form-control' />
          </div>
  
          <h2>Education</h2>
          <div className='form-group'>
            <label htmlFor='school'>School/University</label>
            <input type='text' id='school' name='school' className='form-control' />
          </div>
  
          <div className='form-group'>
            <label htmlFor='degree'>Degree</label>
            <input type='text' id='degree' name='degree' className='form-control' />
          </div>
  
          <div className='form-group'>
            <label htmlFor='graduationYear'>Graduation Year</label>
            <input type='number' id='graduationYear' name='graduationYear' className='form-control' />
          </div>

  <h2>Work Experience</h2>
  {workExpForms.map((form, index) => (
          <AddWorkExp
            key={form.id}
            index={index + 1}
            id={form.id}
            deleteWork={() => handleDeleteForm(form.id)}
          />
        ))}
  <button type='button' className='workExpBtn' onClick={handleAddForm}>Add Work Experience</button>
         
          <h2>Skills</h2>
          {skills.map((skill, index) => (
  <AddSkills key={skill.id} index={index + 1} deleteWork={() => handleDeleteSkill(skill.id)} />
))}



  <button type='button' className='workExpBtn' onClick={handleAddSkill}>Add skill </button>
        
         
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    );
  }


  
  
  export default FormForEdit;