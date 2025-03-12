import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProject.css';

function FeaturedProject({ project }) {
  const { id, title, description, threads } = project;
  const latestThread = threads?.items?.length > 0 ? threads.items[0] : null;

  return (
    <div className="featured-project">
      <div className="featured-project-content">
        <h2>{title}</h2>
        <div className="featured-project-description">{description}</div>
        
        {latestThread && (
          <div className="featured-thread">
            <h3>{latestThread.headline}</h3>
            <div className="thread-content">{latestThread.content}</div>
          </div>
        )}
        
        <Link to={`/project/${id}`} className="read-more-btn">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default FeaturedProject;
