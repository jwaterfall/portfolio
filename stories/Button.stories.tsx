import { Meta, Story } from '@storybook/react';
import Button, { ButtonVariant } from '../components/elements/Button';

interface Args {
  variant: ButtonVariant;
  text: string;
  fullWidth: boolean;
}

export default {
  title: 'Elements/Button',
  component: Button,
} as Meta;

const Template: Story<Args> = (args: Args) => (
  <Button variant={args.variant} fullWidth={args.fullWidth}>
    {args.text}
  </Button>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  text: 'Click me!',
  fullWidth: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  text: 'Click me!',
  fullWidth: false,
};

export const Fullwidth = Template.bind({});
Fullwidth.args = {
  variant: 'primary',
  text: 'Full width!',
  fullWidth: true,
};
