'use client';

import { useBreadcrumbs } from '@/features/navigation/breadcrumbs/provider';
import { useEffect } from 'react';

export default function UsersPage() {
    const { setBreadcrumbs } = useBreadcrumbs();

    useEffect(() => {
        setBreadcrumbs([{ title: 'Team', href: '/team' }, { title: 'Users' }]);
    }, [setBreadcrumbs]);

    return <></>;
}
