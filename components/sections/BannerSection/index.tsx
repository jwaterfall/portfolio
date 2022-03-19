import { FC } from 'react';

import Animation from '../../elements/Animation';
import Button from '../../elements/Button';
import ButtonContainer from '../../elements/ButtonContainer';
import Color from '../../elements/Color';
import NavLink from '../../elements/NavLink';
import Section from '../../elements/Section';
import Typography from '../../elements/Typography';
import { ParagraphContainer } from './styles';

const BannerSection: FC = () => (
  <Section hash="home">
    <Animation delay={500} variant="bottom">
      <Typography variant="h5" m="0 0 1rem " font="secondary">
        <Color>Hey, my name is</Color>
      </Typography>
    </Animation>
    <Animation delay={600} variant="bottom">
      <Typography variant="h1">Jack Waterfall.</Typography>
    </Animation>
    <Animation delay={700} variant="bottom">
      <Typography variant="h1">
        I&#39;m a <Color color="secondary">software developer</Color>.
      </Typography>
    </Animation>
    <Animation delay={800} variant="bottom">
      <ParagraphContainer>
        <Typography m="1.25rem 0 0">
          I’m a Derby-based full stack software developer with a passion for
          building scalable, reliable and accessible software. I have experience
          with technologies such as React, NextJS, Typescript, Express and
          MongoDB.
        </Typography>
      </ParagraphContainer>
    </Animation>
    <Animation delay={900} variant="bottom" width="100%">
      <ButtonContainer>
        <NavLink href="/#projects">
          <Button isFullWidth>Check out my work!</Button>
        </NavLink>
        <NavLink href="#contact">
          <Button isFullWidth color="secondary">
            Contact me
          </Button>
        </NavLink>
      </ButtonContainer>
    </Animation>
  </Section>
);

export default BannerSection;
