import { type ComponentPropsWithRef, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import styles from './Text.module.scss';

const textVariants = cva(styles.base, {
  variants: {
    size: {
      S: styles.sizeS,
      M: styles.sizeM,
      L: styles.sizeL,
    },
    lineHeight: {
      S: styles.lineHeightS,
      M: styles.lineHeightM,
      L: styles.lineHeightL,
    },
    weight: {
      normal: styles.weightNormal,
      bold: styles.weightBold,
    },
    whitespace: {
      wrap: styles.whitespaceWrap,
      nowrap: styles.whitespaceNoWrap,
    },
  },
  defaultVariants: {
    size: 'M',
    lineHeight: 'M',
    whitespace: 'nowrap',
  },
});

type Props = VariantProps<typeof textVariants> & ComponentPropsWithRef<'p'>;

export const Text = forwardRef<HTMLParagraphElement, Props>(
  ({ size, lineHeight, weight, whitespace, className, children, ...props }, ref) => {
    return (
      <p ref={ref} className={textVariants({ size, lineHeight, weight, whitespace, className })} {...props}>
        {children}
      </p>
    );
  },
);
