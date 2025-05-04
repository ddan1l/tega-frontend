'use client';

import { definitions } from '@/types/api';
import { createContext, useEffect, useState } from 'react';
import { fetchInitialUser } from './api/fetch-initial-user';

type AuthContextType = {
    user: definitions['res.UserResponse'] | null | undefined;
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

    useEffect(() => {
        const syncAuth = async () => {
            const initialUser = await fetchInitialUser();
            setUser(initialUser);
        };
        syncAuth();
    }, []);

    return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
}
