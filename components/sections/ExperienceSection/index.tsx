import { FC } from 'react';

import { Experience } from '../../../types';
import ExperienceCard from '../../ExperienceCard';
import Animation from '../../elements/Animation';
import { Flexbox } from '../../elements/Box';
import Section from '../../elements/Section';
import SectionHeading from '../../elements/SectionHeading';

export interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: FC<ExperienceSectionProps> = ({ experiences }) => (
  <Section hash="experience" variant="secondary">
    <Animation delay={500} duration={500} variant="bottom">
      <SectionHeading>experience</SectionHeading>
      <Flexbox direction="column" gap="1rem">
        {experiences?.map((experience) => (
          <ExperienceCard experience={experience} key={experience.id} />
        ))}
      </Flexbox>
    </Animation>
  </Section>
);

export default ExperienceSection;
