'use client';

import { createContext, useContext, useState } from 'react';
import { getBreadcrumbs } from './breadcrumbs-map';
import { BreadcrumbItem } from './types';

type BreadcrumbsContextType = {
    breadcrumbs: BreadcrumbItem[];
    setBreadcrumbs: (crumbs: BreadcrumbItem[]) => void;
};

const BreadcrumbsContext = createContext<BreadcrumbsContextType>({
    breadcrumbs: [],
    setBreadcrumbs: () => {},
});

export function BreadcrumbsProvider({
    children,
    pathname,
}: {
    children: React.ReactNode;
    pathname: string;
}) {
    const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>(getBreadcrumbs(pathname));

    return (
        <BreadcrumbsContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>
            {children}
        </BreadcrumbsContext.Provider>
    );
}

export const useBreadcrumbs = () => useContext(BreadcrumbsContext);
