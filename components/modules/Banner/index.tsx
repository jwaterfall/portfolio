import { FC } from 'react';
import Button from '../../elements/Button';
import Color from '../../elements/Color';
import NavLink from '../../elements/NavLink';
import Typography from '../../elements/Typography';

import { Container, ButtonContainer } from './styles';

const Banner: FC = () => (
  <Container>
    <Typography variant="h3" font="secondary" m="0 0 1rem ">
      <Color>Hey, my name is</Color>
    </Typography>
    <Typography variant="h1">Jack Waterfall.</Typography>
    <Typography variant="h1">
      I&#39;m a <Color variant="secondary">software developer</Color>.
    </Typography>
    <Typography m="1.25rem 0 0">
      I’m a Derby-based full stack software developer with a passion for
      building scalable, reliable and accessible software. I have experience
      with technologies such as React, NextJS, Typescript, Express and MongoDB.
    </Typography>
    <ButtonContainer>
      <NavLink href="/#projects">
        <Button>Check out my work!</Button>
      </NavLink>
      <NavLink href="/blog">
        <Button variant="secondary">View my blog</Button>
      </NavLink>
    </ButtonContainer>
  </Container>
);

export default Banner;
