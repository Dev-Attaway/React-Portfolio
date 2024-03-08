import Project from "../components/Project";

// Define the Portfolio component
export default function Portfolio() {
  // Render the Portfolio component
  return (
    /* Project component from the specified file path
       has data manually inserted into the properties below
       these properties then used within the project component
    */
    <div className="portfolio mx-auto">
      {/* Inserting data in the  */}
      <div className="projects my-3">
        <Project
          title="Weather App"
          image="./weather-app-readme-res.png"
          projectLink="https://dev-attaway.github.io/weather-app/"
          githubLink="https://github.com/Dev-Attaway/weather-app"
        />
        <Project
          title="Fake Store"
          image="./fake-store.png"
          projectLink="https://boiling-harbor-15362-4fdcf0c8906a.herokuapp.com/"
          githubLink="https://github.com/LexiKHecht/Fake-store"
        />
        <Project
          title="MVC Tech Blog"
          image="./MVC-tech-blog.png"
          projectLink="https://dev-attaway-mvc-hbs-blog-f80032cd86ff.herokuapp.com/"
          githubLink="https://github.com/Dev-Attaway/MVC-tech-blog"
        />
      </div>
      <div className="projects my-3">
        <Project
          title="Dine and Date"
          image="./dine-and-date.png"
          projectLink="https://lexikhecht.github.io/Date-Night/"
          githubLink="https://github.com/LexiKHecht/Date-Night"
        />
        <Project
          title="SQL Employee Tracker"
          image="./SQL-employee-tracker.png"
          projectLink="https://github.com/Dev-Attaway/SQL-employee-tracker"
          githubLink="https://github.com/Dev-Attaway/SQL-employee-tracker"
        />
        <Project
          title="Work Day Scheduler"
          image="./scheduler.png"
          projectLink="https://dev-attaway.github.io/scheduler/"
          githubLink="https://github.com/Dev-Attaway/scheduler"
        />
        {/* Add more Project components as needed */}
      </div>
    </div>
  );
}
