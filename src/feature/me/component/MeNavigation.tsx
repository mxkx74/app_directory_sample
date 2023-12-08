import { type ComponentPropsWithRef } from 'react';
import { ArrowDownIcon, BellIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Stack,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/component/ui';
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
        <Popover>
          <PopoverTrigger asChild>
            <Button size="icon" className="w-8 h-8 rounded-full hover:scale-105">
              <Avatar size="sm">
                <AvatarImage alt={props.display_name} src={avatarImage.url} />
                <AvatarFallback>{props.display_name}</AvatarFallback>
              </Avatar>
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="bg-slate-900 border-none w-auto p-1">
            <ul role="menu">
              <li role="presentation">
                <Button asChild width="full" round="none" className="justify-start hover:bg-stone-900" role="menuitem">
                  <Link href="/">アカウント</Link>
                </Button>
              </li>
              <li role="presentation">
                <Button asChild width="full" round="none" className="justify-start hover:bg-stone-900" role="menuitem">
                  <Link href="/">プロフィール</Link>
                </Button>
              </li>
              <li role="presentation">
                <Button asChild width="full" round="none" className="justify-start hover:bg-stone-900" role="menuitem">
                  <Link href="/">Premiumにアップグレード</Link>
                </Button>
              </li>
              <Button
                asChild
                width="full"
                round="none"
                className="justify-start hover:bg-stone-900 border-b border-b-gray-500"
                role="menuitem"
              >
                <Link href="/">設定</Link>
              </Button>
              <li role="presentation">
                <Button asChild width="full" round="none" className="justify-start hover:bg-stone-900" role="menuitem">
                  <Link href="/">ログイン</Link>
                </Button>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      </Stack>
    )
  );
};

// container component
export const MeNavigation = async () => {
  const { payload: props } = await interactor.findMe();
  return props != null && <MeNavigationPresentation {...props} />;
};
