import { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listProjects, getFeaturedProject } from '../apicalls';

export function useProjectData() {
  const [projects, setProjects] = useState([]);
  const [featuredProject, setFeaturedProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        
        // Get all projects
        const projectsData = await API.graphql(graphqlOperation(listProjects, { limit: 100 }));
        const allProjects = projectsData.data.listProjects.items;
        
        // Get featured project (project with most recent thread)
        const featuredData = await API.graphql(graphqlOperation(getFeaturedProject, { limit: 10 }));
        const projectsWithThreads = featuredData.data.listProjects.items.filter(
          project => project.threads.items.length > 0
        );
        
        // Sort by most recent thread
        const sortedProjects = projectsWithThreads.sort((a, b) => {
          const aDate = new Date(a.threads.items[0].createdAt).getTime();
          const bDate = new Date(b.threads.items[0].createdAt).getTime();
          return bDate - aDate; // newest first
        });
        
        setProjects(allProjects);
        setFeaturedProject(sortedProjects.length > 0 ? sortedProjects[0] : null);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { projects, featuredProject, loading, error };
}