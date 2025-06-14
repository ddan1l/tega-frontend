import { useState } from 'react';
import { api } from '@/lib/api';
import { definitions } from '@/types/api';
import { useRouter } from 'next/navigation';
import { getSubdomain } from '@/lib/utils/get-subdomain';

type AuthMode = 'login' | 'register';

export type AuthError = definitions['errs.AppError'] & {
    details: {
        fullname: string;
        email: string;
        password: string;
    };
};

export const useAuthForm = (mode: AuthMode) => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState<AuthError | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

            if (mode === 'login') {
                result = await api.auth.login({
                    email: formData.email,
                    password: formData.password,
                });

                if (result.success) {
                    const sub = getSubdomain();

                    if (!sub) {
                        router.push('/projects');
                    } else {
                        router.push('/');
                    }

                    return true;
                }
            } else {
                result = await api.auth.register({
                    email: formData.email,
                    password: formData.password,
                    fullname: formData.fullname,
                });

                if (result.success) {
                    router.push('/projects/create');
                    return true;
                }
            }
        } catch (err) {
            handleAuthError(err as definitions['errs.AppError']);
        } finally {
            setIsLoading(false);
        }
        return false;
    };

    const handleAuthError = (error: definitions['errs.AppError']) => {
        setError(error as AuthError);
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
