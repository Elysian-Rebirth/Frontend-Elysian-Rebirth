import {
    Card as ShadcnCard,
    CardHeader as ShadcnCardHeader,
    CardFooter as ShadcnCardFooter,
    CardTitle as ShadcnCardTitle,
    CardDescription as ShadcnCardDescription,
    CardContent as ShadcnCardContent,
    type CardProps
} from '@/ui/card';
import { cn } from '@/lib/utils';

/**
 * Card primitive - wraps shadcn/ui Card with project defaults
 */
export function Card({ className, ...props }: CardProps) {
    return (
        <ShadcnCard
            className={cn('transition-all duration-200', className)}
            {...props}
        />
    );
}

export const CardHeader = ShadcnCardHeader;
export const CardFooter = ShadcnCardFooter;
export const CardTitle = ShadcnCardTitle;
export const CardDescription = ShadcnCardDescription;
export const CardContent = ShadcnCardContent;
export type { CardProps };
