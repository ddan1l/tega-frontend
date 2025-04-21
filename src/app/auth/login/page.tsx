'use client';

import { AuthForm } from '../components/AuthForm';
import { useAuthForm } from '../hooks/useAuthForm';

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
