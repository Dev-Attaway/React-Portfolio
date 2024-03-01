// import { Link, useLocation } from 'react-router-dom';

function Project({ title, description, image, technologies }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{description}</p>
      <p>Technologies used: {technologies.join(', ')}</p>
    </div>
  );
}

export default Project;