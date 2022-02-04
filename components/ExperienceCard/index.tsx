import { FC } from 'react';

import { Experience } from '../../types';
import Flexbox from '../elements/Flexbox';
import { List, ListItem } from '../elements/List';
import Typography from '../elements/Typography';
import { Card } from './styles';

export interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => (
  <Card>
    <Flexbox direction="column" gap="0.5rem">
      <Typography variant="h5">{experience.title}</Typography>
      <Typography>{experience.timeframe}</Typography>
      <List>
        {experience.items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
    </Flexbox>
  </Card>
);

export default ExperienceCard;
