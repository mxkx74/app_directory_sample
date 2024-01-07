import { type ComponentPropsWithRef, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import styles from './Stack.module.scss';

const stackVariants = cva(styles.base, {
  variants: {
    space: {
      none: styles.spaceNone,
      S: styles.spaceS,
      M: styles.spaceM,
      L: styles.spaceL,
      XL: styles.spaceXl,
    },
    direction: {
      column: styles.directionColumn,
      row: styles.directionRow,
    },
    padding: {
      S: styles.paddingS,
      M: styles.paddingM,
      L: styles.paddingL,
    },
    width: {
      auto: styles.widthAuto,
      full: styles.widthFull,
    },
    radius: {
      S: styles.radiusS,
      M: styles.radiusM,
      L: styles.radiusL,
    },
  },
  defaultVariants: {
    space: 'M',
    direction: 'column',
  },
});

type Props = VariantProps<typeof stackVariants> & ComponentPropsWithRef<'div'>;

export const Stack = forwardRef<HTMLDivElement, Props>(
  ({ space, direction, padding, width, radius, className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={stackVariants({ space, direction, padding, width, radius, className })} {...props}>
        {children}
      </div>
    );
  },
);
