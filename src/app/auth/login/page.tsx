'use client';

import { AuthForm } from '@/features/auth/components/auth-form';
import { useAuthForm } from '@/features/auth/hooks/use-auth-form';

export default function LoginPage() {
    const { formData, error, isLoading, handleChange, handleSubmit } = useAuthForm('login');

    return (
        <AuthForm
            mode="login"
            formData={formData}
            error={error}
            isLoading={isLoading}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    );
}
