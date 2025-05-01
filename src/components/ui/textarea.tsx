import * as React from 'react';

import { cn } from '@/lib/utils';
import { CircleAlert } from 'lucide-react';

interface InputProps extends React.ComponentProps<'textarea'> {
    error?: string | boolean | null;
}

function Textarea({ className, error, ...props }: InputProps) {
    return (
        <div className="flex flex-col gap-1 w-full">
            <textarea
                data-slot="textarea"
                className={cn(
                    'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                    error ? 'border-rose-500 focus-visible:border-rose-500' : '',
                    className
                )}
                {...props}
                aria-invalid={!!error}
            />
            {error && (
                <span className={cn('text-rose-600 flex items-center gap-2 text-sm')} data-slot="error">
                    <CircleAlert width={15} />
                    {typeof error === 'string' ? error : 'Invalid value'}
                </span>
            )}
        </div>
    );
}

export { Textarea };
