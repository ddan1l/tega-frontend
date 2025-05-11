import { redirect } from 'next/navigation';

import { fetchInitialProjects } from '@/features/project/api/fetch-projects';
import ProjectsList from '@/features/project/components/projects-list';

export default async function ProjectsPage() {
    const projects = await fetchInitialProjects();

    if (!projects) {
        redirect(`/forbidden`);
    }

    if (projects?.length) {
        return <ProjectsList projects={projects} />;
    } else {
        redirect(`/projects/create`);
    }
}
