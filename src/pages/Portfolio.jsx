import Project from '../components/Project'; // Assuming Project.js is in the same directory


export default function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        <Project
          title="Project 1"
          description="This is the first project."
          image="project1.jpg"
          technologies={['React', 'JavaScript', 'CSS']}
        />
        <Project
          title="Project 2"
          description="This is the second project."
          image="project2.jpg"
          technologies={['Node.js', 'Express', 'MongoDB']}
        />
        <Project
          title="Project 3"
          description="This is the second project."
          image="project2.jpg"
          technologies={['Node.js', 'Express', 'MongoDB']}
        />
        <Project
          title="Project 4"
          description="This is the second project."
          image="project2.jpg"
          technologies={['Node.js', 'Express', 'MongoDB']}
        />
        <Project
          title="Project 5"
          description="This is the second project."
          image="project2.jpg"
          technologies={['Node.js', 'Express', 'MongoDB']}
        />
        <Project
          title="Project 6"
          description="This is the second project."
          image="project2.jpg"
          technologies={['Node.js', 'Express', 'MongoDB']}
        />
        {/* Add more Project components as needed */}
      </div>
    </div>
  );
}
