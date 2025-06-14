import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ProjectFormError } from '../../../../features/project/hooks/use-project-form';
import { cn } from '@/lib/utils';
import { CircleAlert } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

type AuthFormProps = {
    formData: {
        name: string;
        slug: string;
        description: string;
    };
    error: ProjectFormError | null;
    isLoading: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
};

export const CreateProjectForm = ({
    formData,
    error,
    isLoading,
    handleChange,
    handleSubmit,
}: AuthFormProps) => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-muted">
            <div className="p-6 w-full max-w-sm rounded-xl border bg-card text-card-foreground shadow">
                <h2 className="text-center text-xl font-semibold mb-6">Create new Project</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        error={error?.details?.name}
                        name="name"
                        autoComplete="project_name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                        required
                    />

                    <Input
                        error={error?.details?.slug}
                        name="slug"
                        autoComplete="slug"
                        placeholder="Slug"
                        value={formData.slug}
                        onChange={handleChange}
                        className="w-full"
                    />

                    <Textarea
                        error={error?.details?.description}
                        name="description"
                        autoComplete="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full"
                    />

                    <Button type="submit" className="w-full mt-2" disabled={isLoading}>
                        {isLoading ? 'Processing...' : 'Create'}
                    </Button>

                    {error && !error.details && (
                        <span
                            className={cn('text-rose-600 flex items-center gap-2 text-sm')}
                            data-slot="error"
                        >
                            <CircleAlert width={15} />
                            {error.message}
                        </span>
                    )}
                </form>
            </div>
        </div>
    );
};
