import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ThreadList from '../components/ThreadList';
import SortSelector from '../components/SortSelector';
import { API, graphqlOperation } from 'aws-amplify';
import { getProject } from '../graphql/queries';
import { useEffect } from 'react';
import './ProjectPage.css';

function ProjectPage() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [sortDirection, setSortDirection] = useState('ASC'); // Default: oldest first
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProject() {
      try {
        setLoading(true);
        const response = await API.graphql(
          graphqlOperation(getProject, { id })
        );
        setProject(response.data.getProject);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching project:', err);
        setError(err);
        setLoading(false);
      }
    }

    fetchProject();
  }, [id]);

  if (loading) return <div className="loading">Loading project...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;
  if (!project) return <div>Project not found</div>;

  return (
    <div className="project-page">
      <div className="project-details">
        <h1>{project.title}</h1>
        <div className="project-description">{project.description}</div>
        
        <div className="thread-controls">
          <h2>Threads</h2>
          <SortSelector 
            sortDirection={sortDirection} 
            onChange={setSortDirection} 
          />
        </div>
        
        <ThreadList 
          threads={project.threads?.items || []} 
          sortDirection={sortDirection} 
        />
      </div>
    </div>
  );
}

export default ProjectPage;
