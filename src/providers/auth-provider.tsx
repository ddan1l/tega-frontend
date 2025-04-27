'use client';

import { definitions } from '@/types/api';
import { createContext, useState } from 'react';

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

    // useEffect(() => {
    //     const syncAuth = async () => {
    //         const res = await fetch('http://localhost:8080/auth/user', {
    //             credentials: 'include',
    //         });
    //         setUser(await res.json());
    //     };
    //     syncAuth();
    // }, []);

    return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
}
