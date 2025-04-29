import { useState } from 'react';
import { api } from '@/lib/api';
import { definitions } from '@/types/api';

export const useProjectsList = () => {
    const [projectsList, setProjectsList] = useState(<definitions['user_dto.ProjectDto'][]>[]);
    const [error, setError] = useState<definitions['errs.AppError'] | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const getProjectsList = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const result = await api.auth.projects();

            if (result.success) {
                setProjectsList(<definitions['user_dto.ProjectDto'][]>result.data.projects);
            }
        } catch (err) {
            setError(err as definitions['errs.AppError']);
        } finally {
            setIsLoading(false);
        }
        return false;
    };

    return {
        error,
        isLoading,
        projectsList,
        getProjectsList,
    };
};
