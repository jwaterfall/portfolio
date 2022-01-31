import { Meta, Story } from '@storybook/react';
import Color, { ColorVariant } from '../components/elements/Color';
import Typography from '../components/elements/Typography';

interface Args {
  variant: ColorVariant;
  text: string;
}

export default {
  title: 'Elements/Color',
  component: Color,
} as Meta;

const Template: Story<Args> = (args: Args) => (
  <Typography variant="h1">
    <Color variant={args.variant}>{args.text}</Color>
  </Typography>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  text: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  text: 'Secondary',
};
