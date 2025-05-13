'use client';

import { getBreadcrumbs } from '@/features/navigation/breadcrumbs/breadcrumbs-map';
import { useBreadcrumbs } from '@/features/navigation/breadcrumbs/provider';
import { useEffect } from 'react';

export default function UsersPage() {
    const { setBreadcrumbs } = useBreadcrumbs();

    useEffect(() => {
        setBreadcrumbs(getBreadcrumbs(`/team`));
    }, []);

    return (
        <>
            <h1>Team</h1>
        </>
    );
}
