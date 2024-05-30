import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section className="education">
      <div className="container">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>
              Matoshri College of Engineering and Research Center Nashik
            </strong>{" "}
            - B.E. in Computer Engineering (2019-2023) - CGPA: 7.87
          </li>
          <li>
            <strong>Bhairomal Tanwani Junior College Aurangabad</strong> - HSC
            (2018-2019) - Percentage: 59.38
          </li>
          <li>
            <strong>Shivtej International School Aurangabad</strong> - SSC
            (2016-2017) - Percentage: 82.80
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
