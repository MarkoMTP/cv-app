

function AddEducation ({ index, education, handleInputChange, deleteEducation }) {


return (
<>
<div className='form-group'>
<label htmlFor={`schools-${index}`}>School/University</label>
<input type='text' id={`schools-${index}`} name='school' className='form-control' value={education.school} onChange={handleInputChange} />
</div>
<div className='form-group'>
<label htmlFor={`degree-${index}`}>Degree</label>
<input type='text' id={`degree-${index}`} name='degree' className='form-control' value={education.degree} onChange={handleInputChange} />
</div>
<div className='form-group'>
<label htmlFor={`gradYear-${index}`}>Graduation Year</label>
<input type='number' id={`gradYear-${index}`} name='gradYear' className='form-control' value={education.gradYear} onChange={handleInputChange} />
<button type='button' className='btn btn-primary' onClick={deleteEducation}>Delete Education</button>

</div>
</>
)

}


function DisplayEducation({school, degree, year, index}) {
    return (


        <>
        <h3>Education {index + 1}</h3>
        <p><strong>School: </strong> {school}</p>
        <p><strong>Degree: </strong> {degree}</p>
        <p><strong>Graduation Year: </strong> {year}</p>

      </>




    )
}

export {AddEducation, DisplayEducation}