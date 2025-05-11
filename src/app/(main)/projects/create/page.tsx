'use client';

import { CreateProjectForm } from '@/features/project/components/create-project-form';
import { useProjectForm } from '@/features/project/hooks/use-project-form';

export default function CreateProjectPage() {
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
