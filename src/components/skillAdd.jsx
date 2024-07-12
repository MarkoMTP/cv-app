
export function AddSkills({ index, skill, deleteWork, handleInputChange }) {
  return (
    <div className='form-group'>
      <label htmlFor={`skills-${index}`}>Skill {index}</label>
      <input type='text' id={`skills-${index}`} name='value' className='form-control' placeholder='e.g. JavaScript, React, Node.js' value={skill.value} onChange={handleInputChange} />
      <button type='button' className='btn btn-primary' onClick={deleteWork}>Delete Skill</button>
    </div>
  );
}

 

 export function SkillDisplay({ index, skill }) {
  return (
    <>
      <p><strong>Skill {index + 1}:</strong> {skill}</p>
    </>
  );
}