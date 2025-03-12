import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectGrid.css';

function ProjectGrid({ projects }) {
  return (
    <div className="project-grid">
      {projects && projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectGrid;
