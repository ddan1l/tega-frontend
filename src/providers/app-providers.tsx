import { ReactNode } from 'react';
import { ThemeProvider } from './teme-provider';

export function AppProviders({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
        </ThemeProvider>
    );
}
