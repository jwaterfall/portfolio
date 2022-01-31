import { Meta, Story } from '@storybook/react';
import Logo, { LogoVariant } from '../components/elements/Logo';

interface Args {
  variant: LogoVariant;
}

export default {
  title: 'Elements/Logo',
  component: Logo,
} as Meta;

const Template: Story<Args> = (args: Args) => <Logo variant={args.variant} />;

export const Small = Template.bind({});
Small.args = {
  variant: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  variant: 'large',
};
