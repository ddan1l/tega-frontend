'use client';

import { useProjectForm } from '../hooks/use-project-form';
import { CreateProjectForm } from './CreateProjectForm';

export default function ProjectsPage() {
    const { formData, error, isLoading, handleChange, handleSubmit } = useProjectForm();

    return (
        <CreateProjectForm
            formData={formData}
            error={error}
            isLoading={isLoading}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    );
}
