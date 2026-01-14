import { Input as ShadcnInput, type InputProps } from '@/ui/input';
import { cn } from '@/lib/utils';

/**
 * Input primitive - wraps shadcn/ui Input with project defaults
 */
export function Input({ className, ...props }: InputProps) {
    return (
        <ShadcnInput
            className={cn('transition-all duration-200', className)}
            {...props}
        />
    );
}

export type { InputProps };
