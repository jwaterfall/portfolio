import { FC } from 'react';

import { Experience } from '../../types';
import { Flexbox } from '../elements/Box';
import Color from '../elements/Color';
import { List, ListItem } from '../elements/List';
import Typography from '../elements/Typography';
import { Card } from './styles';

export interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => (
  <Card>
    <Flexbox direction="column" gap="0.75rem">
      <Typography variant="h3">{experience.title}</Typography>
      <Typography variant="h6">
        <Color>{experience.timeframe}</Color>
      </Typography>
      <List>
        {experience.items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
    </Flexbox>
  </Card>
);

export default ExperienceCard;
