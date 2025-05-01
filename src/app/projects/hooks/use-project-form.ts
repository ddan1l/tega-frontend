import { useState } from 'react';
import { api } from '@/lib/api';
import { definitions } from '@/types/api';
import { useRouter } from 'next/navigation';

export type ProjectFormError = definitions['errs.AppError'] & {
    details: {
        name: string;
        slug: string;
        description: string;
    };
};

export const useProjectForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        slug: '',
        description: '',
    });

    const [error, setError] = useState<ProjectFormError | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setIsLoading(true);
        setError(null);

        try {
            let result;

            result = await api.user.createProject({
                name: formData.name,
                slug: formData.slug,
                description: formData.description,
            });

            if (result.success) {
                const href = (slug: string) =>
                    `${process.env.NEXT_PUBLIC_FRONTEND_PROTO}//${slug}.${process.env.NEXT_PUBLIC_APP_URL}/app`;

                location.href = href(result.data?.project?.slug || '');

                return true;
            }
        } catch (err) {
            handleAuthError(err as definitions['errs.AppError']);
            setIsLoading(false);
        }
        return false;
    };

    const handleAuthError = (error: definitions['errs.AppError']) => {
        setError(error as ProjectFormError);
    };

    return {
        formData,
        error,
        isLoading,
        handleChange,
        handleSubmit,
        setError,
    };
};
