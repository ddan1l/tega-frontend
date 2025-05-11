'use client';

import { createContext, useContext, useState } from 'react';

type Crumb = {
    title: string;
    href?: string;
};

type BreadcrumbsContextType = {
    breadcrumbs: Crumb[];
    setBreadcrumbs: (crumbs: Crumb[]) => void;
};

const BreadcrumbsContext = createContext<BreadcrumbsContextType>({
    breadcrumbs: [],
    setBreadcrumbs: () => {},
});

export function BreadcrumbsProvider({ children }: { children: React.ReactNode }) {
    const [breadcrumbs, setBreadcrumbs] = useState<Crumb[]>([]);

    return (
        <BreadcrumbsContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>
            {children}
        </BreadcrumbsContext.Provider>
    );
}

export const useBreadcrumbs = () => useContext(BreadcrumbsContext);
