import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ project }) {
  const { id, title, description } = project;
  
  // Truncate description to 150 characters
  const truncatedDescription = description.length > 150 
    ? `${description.substring(0, 150)}...` 
    : description;

  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{truncatedDescription}</p>
      <Link to={`/project/${id}`} className="read-more-btn">
        Read More
      </Link>
    </div>
  );
}

export default ProjectCard;
