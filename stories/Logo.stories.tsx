import { Meta, Story } from '@storybook/react';

import Logo, { LogoSize } from '../components/elements/Logo';

interface Args {
  size: LogoSize;
}

export default {
  title: 'Elements/Logo',
  component: Logo,
} as Meta;

const Template: Story<Args> = (args: Args) => <Logo {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};
