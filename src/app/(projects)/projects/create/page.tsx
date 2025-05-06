'use client';

import { CreateProjectForm } from '../components/create-project-form';
import { useProjectForm } from '../hooks/use-project-form';

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
