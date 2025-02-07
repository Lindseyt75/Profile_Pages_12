import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        <Project
          title="Project 1"
          image="project1.jpg"
          deployedLink="https://project1.com"
          githubLink="https://github.com/yourusername/project1"
        />
        <Project
          title="Project 2"
          image="project2.jpg"
          deployedLink="https://project2.com"
          githubLink="https://github.com/yourusername/project2"
        />
        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Portfolio;
