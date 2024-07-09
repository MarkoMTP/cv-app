function AddWorkExp({index ,deleteWork} ) {

    return (
      <div className='workExpForm' id={index }>
        <h2> N'{index}</h2>
      <div className='form-group'>
        <label htmlFor='company'>Company</label>
        <input type='text' id='company' name='company' className='form-control' />
      </div>
    
      <div className='form-group'>
        <label htmlFor='jobTitle'>Job Title</label>
        <input type='text' id='jobTitle' name='jobTitle' className='form-control' />
      </div>
    
      <div className='form-group'>
        <label htmlFor='jobDescription'>Job Description</label>
        <textarea id='jobDescription' name='jobDescription' className='form-control'></textarea>
      </div>
    
      <div className='form-group'>
        <label htmlFor='startDate'>Start Date</label>
        <input type='date' id='startDate' name='startDate' className='form-control' />
      </div>
    
      <div className='form-group'>
        <label htmlFor='endDate'>End Date</label>
        <input type='date' id='endDate' name='endDate' className='form-control' />
      </div>
    
    
      <button type='button' className='btn btn-primary' onClick={deleteWork}>Delete Work Experience</button>
    
      </div>
    )
    }


    export function AddSkills({index, deleteWork}) {

      return (
      <div className='form-group'>
      <label htmlFor='skills'>Skill {index}</label>
      <input type='text' id='skills' name='skills' className='form-control' placeholder='e.g. JavaScript, React, Node.js' />
      <button type='button' className='btn btn-primary' onClick={deleteWork}>Delete Skill</button>

    </div>
      )
    }


    export default AddWorkExp