import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AuthError } from '../hooks/use-auth-form';
import { cn } from '@/lib/utils';
import { CircleAlert } from 'lucide-react';

type AuthFormProps = {
    mode: 'login' | 'register';
    formData: {
        fullname: string;
        email: string;
        password: string;
    };
    error: AuthError | null;
    isLoading: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
};

export const AuthForm = ({ mode, formData, error, isLoading, handleChange, handleSubmit }: AuthFormProps) => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-muted">
            <div className="p-6 w-full max-w-sm rounded-xl border bg-card text-card-foreground shadow">
                <h2 className="text-center text-xl font-semibold mb-6">{mode === 'login' ? 'Login' : 'Register'}</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {mode === 'register' && (
                        <Input
                            error={error?.details?.fullname}
                            name="fullname"
                            type="text"
                            autoComplete="fullName"
                            placeholder="Full Name"
                            value={formData.fullname}
                            onChange={handleChange}
                            className="w-full"
                            required
                        />
                    )}

                    <Input
                        error={error?.details?.email}
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                        required
                    />

                    <Input
                        error={error?.details?.password}
                        name="password"
                        type="password"
                        autoComplete="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full"
                    />

                    <Button type="submit" className="w-full mt-2" disabled={isLoading}>
                        {isLoading ? 'Processing...' : mode === 'login' ? 'Login' : 'Register'}
                    </Button>

                    {error && !error.details && (
                        <span className={cn('text-rose-600 flex items-center gap-2 text-sm')} data-slot="error">
                            <CircleAlert width={15} />
                            {error.message}
                        </span>
                    )}
                </form>

                <p className="mt-4 text-sm text-center">
                    {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
                    <Link
                        href={mode === 'login' ? '/auth/register' : '/auth/login'}
                        className="text-blue-500 hover:underline"
                    >
                        {mode === 'login' ? 'Register' : 'Login'}
                    </Link>
                </p>
            </div>
        </div>
    );
};
