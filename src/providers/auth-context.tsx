// context/auth-context.tsx
'use client';

import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

type User = {
    email: string;
    name: string;
};

type AuthContextType = {
    user: User | null;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const checkAuth = async () => {
            const res = await fetch('/auth/user');
            if (res.ok) {
                setUser((await res.json()).data);
            }
        };
        checkAuth();
    }, []);

    const logout = async () => {
        await fetch('/auth/logout');
        setUser(null);
    };

    return <AuthContext.Provider value={{ user, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
