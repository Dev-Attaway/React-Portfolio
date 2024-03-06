// import { Link, useLocation } from 'react-router-dom';
import "../styles/Project.css";

function Project({ title, image, link }) {
return (
  <div className="project col mx-3 mb-3 rounded-top">
    <h3>
      <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
      <a href="https://github.com/Dev-Attaway" target="_blank" rel="noopener noreferrer">
        <img src="github-icon.png" alt="GitHub" className="gitHub-image" />
      </a>
    </h3>
    <a href={link} className="project-link">
      <img src={image} alt="Project Image" className="responsive-image" />
    </a>
  </div>
);
}

export default Project;
