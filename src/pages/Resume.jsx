import React from 'react';

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      {/* Link to download the resume */}
      <a href="Tim_Lindsey_Resume.pdf" download className="resume-link">
        Please Download a copy of my Resume here.
      </a>
      <ul>
        <li>Here is a list of my skills</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>HTML & CSS</li>
        {/* Add more skills */}
      </ul>
    </section>
  );
};

export default Resume;
