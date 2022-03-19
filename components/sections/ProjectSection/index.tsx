import { FC } from 'react';

import { Project } from '../../../types';
import ProjectCard from '../../ProjectCard';
import Animation from '../../elements/Animation';
import { Flexbox } from '../../elements/Box';
import Section from '../../elements/Section';
import SectionHeading from '../../elements/SectionHeading';

export interface ProjectSectionProps {
  projects: Project[];
}

const ProjectSection: FC<ProjectSectionProps> = ({ projects }) => (
  <Section hash="projects">
    <Animation delay={500} duration={500} variant="bottom">
      <SectionHeading>projects</SectionHeading>
      <Flexbox direction="column" gap="2rem">
        {projects?.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </Flexbox>
    </Animation>
  </Section>
);

export default ProjectSection;
