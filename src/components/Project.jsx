// import { Link, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import "../styles/Project.css";

function Project({ title, image, projectLink, githubLink }) {
  useEffect(() => {
    const element = document.querySelector(".project");

    const handleTouchStart = () => {
      element.classList.add("hovered");
    };

    const handleTouchEnd = () => {
      element.classList.remove("hovered");
    };

    // Add touchstart event listener
    element.addEventListener("touchstart", handleTouchStart);

    // Add touchend event listener
    element.addEventListener("touchend", handleTouchEnd);

    // Clean up event listeners on component unmount
    return () => {
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchend", handleTouchEnd);
    };
  }, []); // Run this effect only once after the component mounts

  return (
    <div className="project mx-3 mb-3 rounded-top">
      <h3>
        <a href={projectLink} className="project-link">
          {title}
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <img src="github-icon.png" alt="GitHub" className="gitHub-image" />
        </a>
      </h3>

      <img src={image} alt="Project Image" className="responsive-image" />
    </div>
  );
}

export default Project;
