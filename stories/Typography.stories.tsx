import { Meta, Story } from '@storybook/react';
import Typography, {
  TypographyVariant,
} from '../components/elements/Typography';

interface Args {
  variant: TypographyVariant;
  text: string;
}

export default {
  title: 'Elements/Typography',
  component: Typography,
} as Meta;

const Template: Story<Args> = (args: Args) => (
  <Typography variant={args.variant}>{args.text}</Typography>
);

export const H1 = Template.bind({});
H1.args = {
  variant: 'h1',
  text: 'This is a header!',
};

export const H2 = Template.bind({});
H2.args = {
  variant: 'h2',
  text: 'This is a header!',
};

export const H3 = Template.bind({});
H3.args = {
  variant: 'h3',
  text: 'This is a header!',
};

export const H4 = Template.bind({});
H4.args = {
  variant: 'h4',
  text: 'This is a header!',
};

export const P = Template.bind({});
P.args = {
  variant: 'p',
  text: 'This is a paragraph!',
};
