import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        <Project
          title="Expense Tracker"
          image="Expensetracker2.jpg"
          deployedLink="https://gurprasad34.github.io/ExpenseTracker/"
          githubLink="https://github.com/Gurprasad34/ExpenseTracker.git"
        />
        <Project
          title="Weather Application"
          image="Weatherapp2.jpg"
          deployedLink="https://weather-service-1613.onrender.com"
          githubLink="https://github.com/Lindseyt75/Module9_Weather.git"
        />
        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Portfolio;
