import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { definitions } from '@/types/api';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { projectHref } from '@/lib/utils/project-href';

export default function ProjectsList({
    projects,
}: {
    projects: definitions['project_dto.ProjectDto'][];
}) {
    const projectItems = projects.map((project) => (
        <Link href={projectHref(project?.slug || '')} key={project.id} className="w-full max-w-md">
            <Alert className="hover:border-zinc-950">
                <Terminal className="h-4 w-4" />
                <AlertTitle>{project.name}</AlertTitle>
                <AlertDescription>{project.description}</AlertDescription>
            </Alert>
        </Link>
    ));

    return (
        <div className="flex min-h-screen bg-muted items-center justify-center">
            <div className="flex p-6 max-w-sm rounded-xl border bg-card text-card-foreground shadow flex-col gap-2 items-center w-full">
                <h2 className="text-center text-xl font-semibold mb-6">Your projects</h2>
                {projectItems}{' '}
                <Link className="mt-2 w-full max-w-md" href={'/projects/create'}>
                    <Button type="submit" className="w-full cursor-pointer">
                        + Create new
                    </Button>
                </Link>
            </div>
        </div>
    );
}
