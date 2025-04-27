'use client';

import { definitions } from '@/types/api';
import { ThemeTogler } from './header/ThemeToggle';
import { UserMenu } from './header/UserMenu';

export function DashboardHeader({ initialUser }: { initialUser: definitions['res.UserResponse'] }) {
    return (
        <header className="">
            <div className="container h-14 mx-auto flex items-center justify-end">
                <div className="flex items-center px-15 gap-2">
                    <UserMenu initialUser={initialUser} />

                    <ThemeTogler />
                </div>
            </div>
        </header>
    );
}
