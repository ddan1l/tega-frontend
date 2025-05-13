import type { Metadata } from 'next';
import '@/app/globals.css';

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

import { redirect } from 'next/navigation';
import { fetchInitialApp } from '@/features/app/api/fetch-app';

import { AppProvider } from '@/features/app/provider';
import { AppHeader } from '@/features/navigation/header/header';
import { AppSidebar } from '@/features/navigation/sidebar/sidebar';
import { headers } from 'next/headers';

export const metadata: Metadata = {
    title: 'Tega',
    description: 'Tega desciption',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const initialApp = await fetchInitialApp().catch((e) => {
        console.error(e);
    });

    const pathname = (await headers()).get('x-pathname') || '/';

    if (initialApp) {
        return (
            <html lang="en" suppressHydrationWarning>
                <head />
                <body>
                    <AppProvider initialApp={initialApp}>
                        <SidebarProvider>
                            <AppSidebar />
                            <SidebarInset className="bg-sidebar p-2">
                                <div className="relative flex w-full flex-1 flex-col shadow bg-background rounded-xl">
                                    <AppHeader />
                                    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                                        {children}
                                    </div>
                                </div>
                            </SidebarInset>
                        </SidebarProvider>
                    </AppProvider>
                </body>
            </html>
        );
    }

    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body></body>
        </html>
    );

    redirect('/auth/login');
}
