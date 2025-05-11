'use client';

import { fetchInitialApp } from '@/features/app/api/fetch-app';
import { BreadcrumbsProvider } from '@/features/navigation/breadcrumbs/provider';
import { definitions } from '@/types/api';
import { ThemeProvider } from 'next-themes';
import { createContext, useCallback, useContext, useState } from 'react';

type AppDto = {
    projectUser?: definitions['project_dto.ProjectUserDto'];
    projects?: definitions['project_dto.ProjectDto'][];
    page?: null;
};

type AppContextType = {
    app: AppDto | null;
    isLoading: boolean;
    error: definitions['errs.AppError'] | null;
    refreshApp: () => Promise<void>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({
    initialApp,
    children,
}: {
    initialApp: AppDto;
    children: React.ReactNode;
}) {
    const [app, setApp] = useState<AppDto | null>(initialApp);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<definitions['errs.AppError'] | null>(null);

    const getApp = useCallback(async (): Promise<AppDto | null> => {
        try {
            return await fetchInitialApp();
        } catch (e) {
            throw e;
        }
    }, []);

    const refreshApp = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const appData = await getApp();
            setApp(appData);
        } catch (e) {
            setError(e as definitions['errs.AppError']);
        } finally {
            setIsLoading(false);
        }
    }, [getApp]);

    const contextValue: AppContextType = {
        app,
        isLoading,
        error,
        refreshApp,
    };

    return (
        <AppContext.Provider value={contextValue}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <BreadcrumbsProvider>{children}</BreadcrumbsProvider>
            </ThemeProvider>
        </AppContext.Provider>
    );
}

export function useAppContext(): AppContextType {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within a ProjectProvider');
    }
    return context;
}
