import { BreadcrumbItem } from './types';

const BREADCRUMBS_MAP: Record<string, BreadcrumbItem[]> = {
    '/team/users': [{ title: 'Team', href: '/team' }, { title: 'Users' }],
    '/team': [{ title: 'Team' }],
};

export const getBreadcrumbs = (pathname: string) => {
    return BREADCRUMBS_MAP[pathname] || [];
};
