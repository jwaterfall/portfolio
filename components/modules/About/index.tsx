import { FC } from 'react';
import Button from '../../elements/Button';
import ButtonContainer from '../../elements/ButtonContainer';
import Color from '../../elements/Color';
import Flexbox from '../../elements/Flexbox';
import NavLink from '../../elements/NavLink';
import Section from '../../elements/Section';
import SectionHeading from '../../elements/SectionHeading';
import Typography from '../../elements/Typography';

import {
  Container,
  Image,
  TechnologiesList,
  TechnologiesListItem,
} from './styles';

const About: FC = () => (
  <Section id="about">
    <SectionHeading>About Me</SectionHeading>
    <Container>
      <Flexbox direction="column" gap="1rem">
        <Typography>
          Hey, my name is Jack waterfall and I love everthing programming
          related! My interest in programming started back in 2012 when I
          decided to try creating content for various video games that I played
          using the LUA programming language.
        </Typography>
        <Typography>
          I studied computer science at college where I spent 2 years learing
          Python and the theory behind programming. After finishing college I
          decided that I didnt want to go to university, instead I spent 3 years
          teaching myself full stack JavaScript development.
        </Typography>
        <Typography>
          Now I want to put my skills to good use to create scalable, reliable
          and accessible software. I joined the School Of Code so that I could
          get the expreience of working as part of a team in an agile way.
        </Typography>
        <Typography>
          Here are some of the most recent technologies that I have used:
        </Typography>
        <TechnologiesList>
          <TechnologiesListItem>JavaScript</TechnologiesListItem>
          <TechnologiesListItem>TypeScript</TechnologiesListItem>
          <TechnologiesListItem>React</TechnologiesListItem>
          <TechnologiesListItem>NextJS</TechnologiesListItem>
          <TechnologiesListItem>StyledComponents</TechnologiesListItem>
          <TechnologiesListItem>Cypress</TechnologiesListItem>
          <TechnologiesListItem>Storybook</TechnologiesListItem>
          <TechnologiesListItem>MongoDB</TechnologiesListItem>
        </TechnologiesList>
      </Flexbox>
      <Image
        src="https://media-exp1.licdn.com/dms/image/C4E03AQEx5Dx4CgFrxg/profile-displayphoto-shrink_800_800/0/1641469515061?e=1649289600&v=beta&t=71CiknTQXgLREowrnGN1FDmN57z92Qcgc8KigcnTP60"
        alt="profile"
      />
    </Container>
  </Section>
);

export default About;
