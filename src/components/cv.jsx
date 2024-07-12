import '../styles/cv.css'
import "../styles/workExp.css"
import { DisplayEducation } from './education.jsx';
import { SkillDisplay } from './skillAdd.jsx';
import { WorkExpDisplay } from './workExp.jsx';



function Cv({ fullName, email, phoneNumber , educations, workExp, skills, handleEdits}) {

    


    return (
      <div className="cv">
        <h3>Personal Info</h3>
        <p><strong>Full Name:</strong> {fullName}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone Number:</strong> {phoneNumber}</p>

        <h3>Education:</h3>
          {educations.map((education, index) => (
            <DisplayEducation
            key={index}
            index={index}
            school={education.school}
            degree={education.degree}
            year={education.gradYear}
            ></DisplayEducation>

          ))}

        <h3>Work Experience:</h3>
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


      <h3>Skills:</h3>
      {skills.map((skill, index) => (
        <SkillDisplay key={skill.id} index={index} skill={skill.value} />
      ))}


        <button type='button' className='workExpBtn' onClick={handleEdits}>Edit</button>

       
      </div>
    );
  }
  
  export default Cv;
  