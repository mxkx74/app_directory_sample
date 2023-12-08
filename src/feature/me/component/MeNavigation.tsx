import { type ComponentPropsWithRef } from 'react';
import { ArrowDownIcon, BellIcon } from '@radix-ui/react-icons';
import { Avatar, AvatarFallback, AvatarImage, Button, Stack } from '@/component/ui';
import { meInteractor } from '@/feature/me/use-case/interactor';
import { type MeViewModel } from '@/feature/me/use-case/outputBoundary';

const interactor = meInteractor();

type PresentationProps = ComponentPropsWithRef<'div'> & MeViewModel;

// presentation component
export const MeNavigationPresentation = (props: PresentationProps) => {
  const [avatarImage] = props.images;

  return (
    props != null && (
      <Stack direction="row" space="S">
        <Button size="sm" className="rounded-3xl text-xs h-8 bg-white text-black hover:scale-105 hover:bg-white">
          Premiumをチェックする
        </Button>
        <Button size="sm" className="rounded-3xl text-xs h-8 hover:scale-105">
          <ArrowDownIcon className="h4 w-4" /> アプリをインストール
        </Button>
        <Button variant="default" size="icon" className="w-8 h-8 rounded-full hover:scale-105">
          <BellIcon />
        </Button>
        <Button size="icon" className="w-8 h-8 rounded-full hover:scale-105">
          <Avatar size="sm">
            <AvatarImage alt={props.display_name} src={avatarImage.url} />
            <AvatarFallback>{props.display_name}</AvatarFallback>
          </Avatar>
        </Button>
      </Stack>
    )
  );
};

// container component
export const MeNavigation = async () => {
  const { payload: props } = await interactor.findMe();
  return props != null && <MeNavigationPresentation {...props} />;
};
