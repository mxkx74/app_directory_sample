import { EnvelopeOpenIcon } from '@radix-ui/react-icons';
import { type Meta, type StoryObj } from '@storybook/react';
import { Button, type ButtonProps } from './Button';

type Props = ButtonProps;

const meta = {
  title: 'ui/Button',
  component: Button,
} satisfies Meta<Props>;

export default meta;

export const Default: StoryObj<Props> = {
  args: {
    children: 'Button',
  },
};

export const WithIcon: StoryObj<Props> = {
  render: (args) => (
    <Button variant={args.variant}>
      <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
    </Button>
  ),
};
