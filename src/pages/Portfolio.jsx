import Project from "../components/Project"; // Assuming Project.js is in the same directory

export default function Portfolio() {
  return (
    <div className="portfolio mx-auto">
      <div className="projects mb-3">
        <Project
          title="Weather App"
          image="./weather-app-readme-res.png"
          link="https://dev-attaway.github.io/weather-app/"
        />
        <Project
          title="Fake Store"
          image="./fake-store.png"
          link="https://boiling-harbor-15362-4fdcf0c8906a.herokuapp.com/"
        />
        <Project
          title="MVC Tech Blog"
          image="./MVC-tech-blog.png"
          link="https://dev-attaway-mvc-hbs-blog-f80032cd86ff.herokuapp.com/"
        />
      </div>

      <div className="projects">
        <Project
          title="Dine and Date"
          image="./dine-and-date.png"
          link="https://lexikhecht.github.io/Date-Night/"
        />
        <Project
          title="SQL Employee Tracker"
          image="./SQL-employee-tracker.png"
          link="https://github.com/Dev-Attaway/SQL-employee-tracker"
        />
        <Project
          title="Work Day Scheduler"
          image="./scheduler.png"
          link="https://dev-attaway.github.io/scheduler/"
        />
        {/* Add more Project components as needed */}
      </div>
    </div>
  );
}
