import { type ComponentPropsWithRef, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import styles from './Stack.module.scss';

const stackVariants = cva(styles.base, {
  variants: {
    space: {
      S: styles.sizeS,
      M: styles.sizeM,
      L: styles.sizeL,
    },
    direction: {
      column: styles.directionColumn,
      row: styles.directionRow,
    },
  },
  defaultVariants: {
    space: 'M',
    direction: 'column',
  },
});

type Props = VariantProps<typeof stackVariants> & ComponentPropsWithRef<'div'>;

export const Stack = forwardRef<HTMLDivElement, Props>(({ space, direction, className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={stackVariants({ space, direction, className })} {...props}>
      {children}
    </div>
  );
});
