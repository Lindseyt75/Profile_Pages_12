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
          <Project
          title="Gamerz"
          image="Gamerz.jpg"
          deployedLink="https://gamerz-client.onrender.com/my-games"
          githubLink="https://github.com/rvrutan/gamerz.git"
        />
          <Project
          title="Employee Tracker"
          image="Employeetracker.jpg"
          githubLink="https://github.com/Lindseyt75/Employee_Tracker_Module10.git"
        />
                <Project
          title="Vehicle Builder"
          image="vehiclebuilder.jpg"
          githubLink="https://github.com/Lindseyt75/Module8Vehicle.git"
        />
                <Project
          title="CSS Portfolio"
          image="portfoliocss.jpg"
          githubLink="https://github.com/Lindseyt75/module2_challenge.git"
        />
        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Portfolio;
