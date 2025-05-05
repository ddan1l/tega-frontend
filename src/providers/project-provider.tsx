'use client';

import { definitions } from '@/types/api';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { fetchInitialProjects } from './api/fetch-projects';

type ProjectDto = definitions['project_dto.ProjectDto'];

type ProjectsContextType = {
    projects: ProjectDto[];
    activeProject: ProjectDto | null;
    isLoading: boolean;
    error: definitions['errs.AppError'] | null;
    setActiveProject: (project: ProjectDto | null) => void;
    refreshProjects: () => Promise<void>;
};

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

export function ProjectProvider({
    initialProjects,
    initialActiveProjects,
    children,
}: {
    initialProjects: ProjectDto[];
    initialActiveProjects: ProjectDto;
    children: React.ReactNode;
}) {
    const [projects, setProjects] = useState<ProjectDto[]>(initialProjects);

    const [activeProject, setActiveProject] = useState<ProjectDto | null>(initialActiveProjects);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<definitions['errs.AppError'] | null>(null);

    const getProjects = useCallback(async (): Promise<ProjectDto[] | null> => {
        try {
            return await fetchInitialProjects();
        } catch (e) {
            throw e;
        }
    }, []);

    const refreshProjects = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const projectsData = await getProjects();
            setProjects(projectsData || []);
        } catch (e) {
            setError(e as definitions['errs.AppError']);
        } finally {
            setIsLoading(false);
        }
    }, [getProjects]);

    const contextValue: ProjectsContextType = {
        projects,
        activeProject,
        isLoading,
        error,
        setActiveProject,
        refreshProjects,
    };

    return <ProjectsContext.Provider value={contextValue}>{children}</ProjectsContext.Provider>;
}

export function useProjectsContext() {
    const context = useContext(ProjectsContext);
    if (context === undefined) {
        throw new Error('useProjectsContext must be used within a ProjectProvider');
    }
    return context;
}
