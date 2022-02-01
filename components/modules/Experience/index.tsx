import { FC } from 'react';
import Card from '../../elements/Card';
import Flexbox from '../../elements/Flexbox';
import { List, ListItem } from '../../elements/List';
import Section from '../../elements/Section';
import SectionHeading from '../../elements/SectionHeading';
import Typography from '../../elements/Typography';

const Experience: FC = () => (
  <Section id="experience" variant="secondary">
    <SectionHeading>Experience</SectionHeading>
    <Flexbox direction="column" gap="1rem">
      <Card>
        <Flexbox direction="column" gap="0.5rem">
          <Typography variant="h5">Student at Derby College</Typography>
          <Typography>2016-2018</Typography>
          <List>
            <ListItem>
              I learnt the Python programming language and advanced programming
              concepts such as object oriented programming and recursion.
            </ListItem>
            <ListItem>
              I learnt computer-science theory including topics such as binary
              and hexadecimal number systems, computer architecture and the
              fundamentals of communication and networking.
            </ListItem>
            <ListItem>
              I learnt how to take a systematic approach to problem solving.
            </ListItem>
          </List>
        </Flexbox>
      </Card>
      <Card>
        <Flexbox direction="column" gap="0.5rem">
          <Typography variant="h5">Freelancer</Typography>
          <Typography>2018-2021</Typography>
          <List>
            <ListItem>
              I taught myself the Javascript programming language as well as
              technologies such as React, NodeJS, Express and MongoDb in order
              to build software.
            </ListItem>
            <ListItem>
              I took on several small freelancing jobs for different clients.
              One of these jobs was to build a blockchain explorer for a
              cryptocoin.
            </ListItem>
            <ListItem>
              I helped launch a small cryptocoin, jobs included building a
              blockchain explorer, website and a sportsbook.
            </ListItem>
          </List>
        </Flexbox>
      </Card>
      <Card>
        <Flexbox direction="column" gap="0.5rem">
          <Typography variant="h5">School of Code bootcamper</Typography>
          <Typography>2021-2022</Typography>
          <List>
            <ListItem>
              I learnt how to effectively plan projects through techniques such
              as ideation sessions and by producing user personas, user stories,
              low-fidelity wireframes and high-fidelity mockups.
            </ListItem>
            <ListItem>
              I learnt how to work as part of a team in an agile way through the
              use of scrums, sprints and retrospectives.
            </ListItem>
            <ListItem>
              I learnt PostgreSQL as an alternative database technology.
            </ListItem>
          </List>
        </Flexbox>
      </Card>
    </Flexbox>
  </Section>
);

export default Experience;
