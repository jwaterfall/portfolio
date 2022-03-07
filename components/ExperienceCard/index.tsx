import { FC } from 'react';

import { Experience } from '../../types';
import Color from '../elements/Color';
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
      <Typography variant="h4">
        <Color color="secondary">{experience.title}</Color>
      </Typography>
      <Typography>
        <Color>{experience.timeframe}</Color>
      </Typography>
      <List>
        <Typography>{experience.text}</Typography>
      </List>
    </Flexbox>
  </Card>
);

export default ExperienceCard;
