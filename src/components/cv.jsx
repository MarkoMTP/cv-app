import '../styles/cv.css'
import "../styles/workExp.css"
import { SkillDisplay } from './skillAdd.jsx';
import { WorkExpDisplay } from './workExp.jsx';



function Cv({ fullName, email, school, graduationYear, phoneNumber , degre, workExp, skills}) {

    


    return (
      <div className="cv">
        <h3>Personal Info</h3>
        <p><strong>Full Name:</strong> {fullName}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone Number:</strong> {phoneNumber}</p>

        <h3>Education:</h3>
        <p><strong>School/University:</strong> {school}</p>
        <p><strong>Graduation Year:</strong> {graduationYear}</p>
        <p><strong>Degree:</strong> {degre}</p>

        <h3>Work Experience</h3>
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


      <h3>Skills</h3>
      {skills.map((skill, index) => (
        <SkillDisplay key={skill.id} index={index} skill={skill.value} />
      ))}

       
      </div>
    );
  }
  
  export default Cv;
  