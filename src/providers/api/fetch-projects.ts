import { api } from '@/lib/api';
import { definitions } from '@/types/api';
import { getSubdomain } from '@/utils/get-subdomain';

export async function fetchInitialProjects(): Promise<
    definitions['project_dto.ProjectDto'][] | null
> {
    try {
        const res = await api.user.projects();
        console.log(res);

        return res.success ? res.data.projects || [] : null;
    } catch (e) {
        throw e;
    }
}

export async function getActiveProject(
    projects: definitions['project_dto.ProjectDto'][]
): Promise<definitions['project_dto.ProjectDto'] | null> {
    const { headers } = await import('next/headers');

    const headersList = await headers();

    const initialActiveProject: definitions['project_dto.ProjectDto'] | null =
        (projects &&
            headersList &&
            projects.length &&
            projects.find(
                (project) => project.slug === getSubdomain(headersList.get('host') || '')
            )) ||
        null;

    return initialActiveProject;
}
