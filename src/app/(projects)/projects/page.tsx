import { api } from '@/lib/api';
import { definitions } from '@/types/api';
import { redirect } from 'next/navigation';

import ProjectsList from './components/projects-list';
import { fetchInitialProjects } from '@/providers/api/fetch-projects';

export default async function ProjectsPage() {
    const projects = await fetchInitialProjects();

    if (!projects) {
        redirect(`/forbidden`);
    }

    if (projects?.length) {
        return (
            <>
                <ProjectsList projects={projects} />
            </>
        );
    } else {
        redirect(`/projects/create`);
    }
}
