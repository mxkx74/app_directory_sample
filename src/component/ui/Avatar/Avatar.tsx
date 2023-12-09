'use client';

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const avatarVariants = cva('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', {
  variants: {
    size: {
      sm: 'h-6 w-6',
      md: 'h-12 w-12',
      lg: 'h-24 w-24',
      xlg: 'h-28 w-28',
      full: 'h-full w-full',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & VariantProps<typeof avatarVariants>
>(({ size, className, ...props }, ref) => (
  <AvatarPrimitive.Root ref={ref} className={cn(avatarVariants({ size, className }))} {...props} />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image ref={ref} className={cn('aspect-square h-full w-full', className)} {...props} />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn('flex h-full w-full items-center justify-center rounded-full bg-muted', className)}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
