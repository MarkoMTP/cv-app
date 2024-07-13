import '../styles/cv.css'
import "../styles/workExp.css"
import { DisplayEducation } from './education.jsx';
import { SkillDisplay } from './skillAdd.jsx';
import { WorkExpDisplay } from './workExp.jsx';



function Cv({ fullName, email, phoneNumber , educations, workExp, skills, handleEdits}) {

    


    return (
      <div className="cv">
       <div className='personal'>
        <h2>Personal Info</h2>
        <p><strong>Full Name:</strong> {fullName}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone Number:</strong> {phoneNumber}</p>
        </div> 
        <div className='education'>
        <h2>Education:</h2>
          {educations.map((education, index) => (
            <DisplayEducation
            key={index}
            index={index}
            school={education.school}
            degree={education.degree}
            year={education.gradYear}
            ></DisplayEducation>

          ))}
</div>

          <div className='work'>
        <h2>Work Experience:</h2>
        {workExp.map((exp, index) => (
        <WorkExpDisplay
          key={index}
          index={index}
          company={exp.company}
          jobTitle={exp.jobTitle}
          jobDescription={exp.jobDescription}
          start={exp.startDate}
          end={exp.endDate}
        />
      ))}
</div>
      <div className='skills'>
      <h2>Skills:</h2>
      {skills.map((skill, index) => (
        <SkillDisplay key={skill.id} index={index} skill={skill.value} />
      ))}

</div>
        <button type='button' className='editBtn' onClick={handleEdits}>Edit</button>

       
      </div>
    );
  }
  
  export default Cv;
  