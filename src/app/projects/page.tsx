import { api } from '@/lib/api';
import ProjectsList from './components/ProjectsList';
import { definitions } from '@/types/api';
import { redirect } from 'next/navigation';

async function getProjects(): Promise<definitions['user_dto.ProjectDto'][] | null> {
    try {
        const res = await api.user.projects();

        return res.success ? res.data.projects || [] : null;
    } catch (e) {
        console.error(e);
        return null;
    }
}

export default async function ProjectsPage() {
    const projects = await getProjects();

    if (!projects) {
        redirect(`/forbidden`);
    }

    if (projects?.length) {
        return <ProjectsList projects={projects} />;
    } else {
        redirect(`/projects/create`);
    }
}
