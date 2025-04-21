import { useState } from 'react';
import { api } from '@/lib/api';
import { definitions } from '@/types/api';
import { useRouter } from 'next/navigation';

type AuthMode = 'login' | 'register';

export type AuthError = definitions['errs.AppError'] & {
    details: {
        name: string;
        email: string;
        password: string;
    };
};

export const useAuthForm = (mode: AuthMode) => {
    const [formData, setFormData] = useState({
        name: '',
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
            } else {
                result = await api.auth.register({
                    email: formData.email,
                    password: formData.password,
                    name: formData.name,
                });
            }

            if (result.success) {
                router.push('/dashboard');
                return true;
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
