import { Button as ShadcnButton, type ButtonProps } from '@/ui/button';
import { cn } from '@/lib/utils';

/**
 * Button primitive - wraps shadcn/ui Button with project defaults
 * All project components should import from here, not from @/ui directly
 */
export function Button({ className, ...props }: ButtonProps) {
    return (
        <ShadcnButton
            className={cn('transition-all duration-200', className)}
            {...props}
        />
    );
}

export type { ButtonProps };
