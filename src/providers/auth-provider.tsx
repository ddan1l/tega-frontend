'use client';

import { definitions } from '@/types/api';
import { createContext, useCallback, useEffect, useState } from 'react';
import { fetchInitialUser } from './api/fetch-initial-user';
import { fetchInitialProjects } from './api/fetch-projects';

type UsertDto = definitions['res.UserResponse'];

type AuthContextType = {
    user: UsertDto | null | undefined;
    isLoading: boolean;
    error: definitions['errs.AppError'] | null;
    refreshUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({
    children,
    initialUser,
}: {
    children: React.ReactNode;
    initialUser?: definitions['res.UserResponse'] | null;
}) {
    const [user, setUser] = useState(initialUser);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<definitions['errs.AppError'] | null>(null);

    const getUser = useCallback(async (): Promise<UsertDto | null> => {
        try {
            return await fetchInitialUser();
        } catch (e) {
            throw e;
        }
    }, []);

    const refreshUser = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const userData = await getUser();
            setUser(userData || null);
        } catch (e) {
            setError(e as definitions['errs.AppError']);
        } finally {
            setIsLoading(false);
        }
    }, [getUser]);

    const contextValue: AuthContextType = {
        user,
        refreshUser,
        isLoading,
        error,
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}
