import { Textarea as ShadcnTextarea, type TextareaProps } from '@/ui/textarea';
import { cn } from '@/lib/utils';

/**
 * Textarea primitive - wraps shadcn/ui Textarea with project defaults
 */
import * as React from 'react';

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <ShadcnTextarea
                className={cn('transition-all duration-200', className)}
                ref={ref}
                {...props}
            />
        );
    }
);
Textarea.displayName = "Textarea";

export type { TextareaProps };
