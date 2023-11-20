import { type Meta, type StoryObj } from '@storybook/react';
import { Label } from '@/component/ui';
import { Input, type InputProps } from './Input';

type Props = InputProps;

const meta = {
  title: 'ui/Input',
  component: Input,
} satisfies Meta<Props>;

export default meta;

export const Default: StoryObj<Props> = {
  args: {
    type: 'email',
    placeholder: 'email',
    className: 'w-[350px]',
  },
};

export const File: StoryObj<Props> = {
  render: () => (
    <div className="grid w-[350px] max-w-sm items-center gap-1.5">
      <Label htmlFor="email">EMAIL</Label>
      <Input id="email" placeholder="hoge@fuga.com" />
    </div>
  ),
};
