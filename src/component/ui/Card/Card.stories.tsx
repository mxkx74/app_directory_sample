import { type Meta, type StoryObj } from '@storybook/react';
import { Button } from '@/component/ui';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './Card';

type Props = typeof Card;

const meta = {
  title: 'ui/Card',
  component: Card,
} satisfies Meta<Props>;

export default meta;

export const Default: StoryObj<Props> = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent>Card</CardContent>
    </Card>
  ),
};

export const WithCardHeader: StoryObj<Props> = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card</CardTitle>
        <CardDescription>CardDescription</CardDescription>
      </CardHeader>
    </Card>
  ),
};

export const WithCardFooter: StoryObj<Props> = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent>Card</CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="secondary">CANCEL</Button>
        <Button>ACCEPT</Button>
      </CardFooter>
    </Card>
  ),
};
