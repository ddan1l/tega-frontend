'use client';

import { getInitialUser } from '@/hooks/use-initial-user';
import { definitions } from '@/types/api';
import { createContext, useEffect, useState } from 'react';

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
            const initialUser = await getInitialUser();
            setUser(initialUser);
        };
        syncAuth();
    }, []);

    return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
}
