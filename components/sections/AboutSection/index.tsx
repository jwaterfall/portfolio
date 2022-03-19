import { FC } from 'react';

import Animation from '../../elements/Animation';
import { Flexbox } from '../../elements/Box';
import Color from '../../elements/Color';
import { List, ListItem } from '../../elements/List';
import Section from '../../elements/Section';
import SectionHeading from '../../elements/SectionHeading';
import Typography from '../../elements/Typography';
import { Container, Image } from './styles';

const AboutSection: FC = () => (
  <Section hash="about">
    <Animation delay={500} duration={500} variant="bottom">
      <SectionHeading>about</SectionHeading>
      <Container>
        <Flexbox direction="column" gap="1rem">
          <Typography>
            Hi, my name is Jack waterfall and I love everything programming
            related! My interest in programming started back when I was 12 years
            old and I decided to try creating content for various video games
            that I played using the LUA programming language.
          </Typography>
          <Typography>
            I studied computer science at college where I spent 2 years learning
            Python and the theory of computer science. After finishing college I
            decided that university wasn&#39;t the correct path for me, instead
            I spent 3 years running a small 3D printing business, during that
            time I also taught myself full stack JavaScript development.
          </Typography>
          <Typography>
            Now I want to put my skills to good use to create scalable, reliable
            and accessible software. I joined the School Of Code bootcamp to
            kickstart my career in the software development industry.
          </Typography>
          <Typography>
            Here are some of the most recent technologies that I have used:
          </Typography>
          <List columns={2} maxWidth="12.5rem">
            <ListItem>
              <Typography variant="h6" font="secondary">
                <Color>JavaScript</Color>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6" font="secondary">
                <Color>TypeScript</Color>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6" font="secondary">
                <Color>React</Color>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6" font="secondary">
                <Color>NextJS</Color>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6" font="secondary">
                <Color>StyledComponents</Color>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6" font="secondary">
                <Color>Cypress</Color>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6" font="secondary">
                <Color>Storybook</Color>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6" font="secondary">
                <Color>MongoDB</Color>
              </Typography>
            </ListItem>
          </List>
        </Flexbox>
        <Image src="/images/profile.png" alt="profile" />
      </Container>
    </Animation>
  </Section>
);

export default AboutSection;
