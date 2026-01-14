/**
 * UI Primitives - Centralized glue layer for shadcn/ui components
 * 
 * All project components MUST import from here, not from @/ui/* directly.
 * This allows for:
 * - Single point of customization
 * - Easy theme switching
 * - Global overrides
 * - Future UI library swaps
 */

// Forms
export * from './button';
export * from './input';
export * from './textarea';
export * from './label';
export * from './switch';
export * from './slider';
export * from './select';

// Layout
export * from './card';
export * from './separator';
export * from './tabs';

// Overlays
export * from './dialog';
export * from './sheet';
export * from './popover';
export * from './tooltip';
export * from './form';
export * from './dropdown-menu';

// Feedback
export * from './alert';
export * from './skeleton';
export * from './progress';
export * from './badge';
export * from './avatar';

// Data
export * from './table';
export * from './accordion';
export * from './scroll-area';
