import '../styles/cv.css'

import "../styles/workExp.css"
function Cv({ fullName, email, school, graduationYear, phoneNumber , degre, skills}) {

    


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
      </div>
    );
  }
  
  export default Cv;
  