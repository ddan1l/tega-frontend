import { ThemeTogler } from './header/ThemeToggle';
import { UserMenu } from './header/UserMenu';

export function DashboardHeader() {
    return (
        <header className="">
            <div className="container h-14 mx-auto flex items-center justify-end">
                <div className="flex items-center gap-2">
                    <UserMenu />
                    <ThemeTogler />
                </div>
            </div>
        </header>
    );
}
