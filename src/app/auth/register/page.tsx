'use client';

import { AuthForm } from '../components/AuthForm';
import { useAuthForm } from '../hooks/use-auth-form';

export default function RegisterPage() {
    const { formData, error, isLoading, handleChange, handleSubmit } = useAuthForm('register');

    return (
        <AuthForm
            mode="register"
            formData={formData}
            error={error}
            isLoading={isLoading}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    );
}
