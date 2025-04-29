import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { definitions } from '@/types/api';

export default function ProjectsList({ projects }: { projects: definitions['user_dto.ProjectDto'][] }) {
    const projectItems = projects.map((project) => (
        <Alert className="w-full max-w-md">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>{JSON.stringify(project)}</AlertDescription>
        </Alert>
    ));

    return <div className="flex min-h-screen items-center justify-center bg-muted">{projectItems}</div>;
}
