import { Meta, Story } from '@storybook/react';
import Color, { ColorVariant } from '../components/elements/Color';
import Typography from '../components/elements/Typography';

interface Args {
  color: ColorVariant;
  text: string;
}

export default {
  title: 'Elements/Color',
  component: Color,
} as Meta;

const Template: Story<Args> = ({ text, ...args }: Args) => (
  <Typography variant="h1">
    <Color {...args}>{text}</Color>
  </Typography>
);

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  text: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  text: 'Secondary',
};
