import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { definitions } from '@/types/api';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProjectsList({ projects }: { projects: definitions['user_dto.ProjectDto'][] }) {
    const href = (slug: string) =>
        `${process.env.NEXT_PUBLIC_FRONTEND_PROTO}//${slug}.${process.env.NEXT_PUBLIC_APP_URL}/app`;

    const projectItems = projects.map((project) => (
        <a href={href(project?.slug || '')} key={project.id} className="w-full max-w-md">
            <Alert className="hover:border-indigo-500 ">
                <Terminal className="h-4 w-4" />
                <AlertTitle>{project.name}</AlertTitle>
                <AlertDescription>{project.description}</AlertDescription>
            </Alert>
        </a>
    ));

    return (
        <div className="flex min-h-screen items-center justify-center bg-muted">
            <div className="flex flex-col gap-2 items-center w-full">
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
