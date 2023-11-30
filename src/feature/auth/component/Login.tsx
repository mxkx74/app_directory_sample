import { type ComponentPropsWithRef } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import Image from 'next/image';
import { Button, Card, CardContent, Stack } from '@/component/ui';
import { authInteractor } from '@/feature/auth/useCase';
import { cn } from '@/lib';

const loginVariants = cva(undefined, {
  variants: {
    variant: {
      default: 'shadow-sm',
      ghost: 'border-none shadow-none',
    },
    width: {
      fit: 'w-fit',
      full: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'default',
    width: 'fit',
  },
});

type Props = VariantProps<typeof loginVariants> & ComponentPropsWithRef<'div'>;

export const LoginCard = ({ variant, width, className, ...props }: Props) => {
  const interactor = authInteractor();

  const handleLogin = () => {
    interactor.login();
  };

  const handleLogout = () => {
    interactor.logout();
  };

  return (
    <Card className={cn(loginVariants({ variant, width, className }))} {...props}>
      <CardContent className="pt-6">
        <Stack space="L">
          <Image src="/asset/Spotify_Logo.png" alt="spotify logo" width={224} height={67} />
          <Stack direction="row">
            <Button size="lg" variant="outline" onClick={handleLogout}>
              LOGOUT
            </Button>
            <Button size="lg" onClick={handleLogin}>
              LOGIN
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
