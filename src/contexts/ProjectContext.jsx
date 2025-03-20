import React, { createContext, useState, useEffect } from "react";
import BaseStore from "/src/stores/BaseStore";

export const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
      const projects = await BaseStore.getProjects();
      const profile = await BaseStore.getUser();
      setProfile(profile);
      setProjects(projects);
      setLoading(false);
    };

    getProjects().catch((error) => {
      setError(error);
      setLoading(false);
    });
  }, []);

  return (
    <ProjectContext.Provider value={{ projects, profile, loading, error }}>
      {children}
    </ProjectContext.Provider>
  );
}
