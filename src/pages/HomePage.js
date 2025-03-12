import React from 'react';
import FeaturedProject from '../components/FeaturedProject';
import Calendar from '../components/Calendar';
import ProjectGrid from '../components/ProjectGrid';
import { useProjectData } from '../hooks/useProjectData';
import './HomePage.css';

function HomePage() {
  const { featuredProject, projects, loading, error } = useProjectData();

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="home-page">
      {featuredProject && (
        <FeaturedProject project={featuredProject} />
      )}
      
      <section className="calendar-section">
        <h2>Calendar</h2>
        <Calendar />
      </section>
      
      <section className="projects-section">
        <h2>All Projects</h2>
        <ProjectGrid projects={projects} />
      </section>
    </div>
  );
}

export default HomePage;
