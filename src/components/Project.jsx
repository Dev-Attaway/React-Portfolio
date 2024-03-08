import { useEffect } from "react";
import "../styles/Project.css";

// Define the Project component
function Project({ title, image, projectLink, githubLink }) {
  // Add touch event listeners to handle hover effects on touch devices
  useEffect(() => {
    // Select the project element
    const element = document.querySelector(".project");

    // Function to handle touchstart event
    const handleTouchStart = () => {
      element.classList.add("hovered"); // Add 'hovered' class on touchstart
    };

    // Function to handle touchend event
    const handleTouchEnd = () => {
      element.classList.remove("hovered"); // Remove 'hovered' class on touchend
    };

    // Add touchstart event listener
    element.addEventListener("touchstart", handleTouchStart);

    // Add touchend event listener
    element.addEventListener("touchend", handleTouchEnd);

    // Cleanup function to remove event listeners on component unmount
    return () => {
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchend", handleTouchEnd);
    };
  }, []); // Run this effect only once after the component mounts

  // Render the Project component
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
