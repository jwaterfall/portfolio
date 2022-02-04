import { Meta, Story } from '@storybook/react';

import Button, { ButtonColor, ButtonSize } from '../components/elements/Button';

interface Args {
  color: ButtonColor;
  size: ButtonSize;
  text: string;
  isFullWidth: boolean;
}

export default {
  title: 'Elements/Button',
  component: Button,
} as Meta;

const Template: Story<Args> = (args: Args) => (
  <Button {...args}>{args.text}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  text: 'Click me!',
  isFullWidth: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  text: 'Click me!',
  isFullWidth: false,
};

export const isFullWidth = Template.bind({});
isFullWidth.args = {
  color: 'primary',
  text: 'Full width!',
  isFullWidth: true,
};
