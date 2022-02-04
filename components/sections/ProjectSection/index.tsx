import { FC } from 'react';

import { Project } from '../../../types';
import ProjectCard from '../../ProjectCard';
import Animation from '../../elements/Animation';
import Flexbox from '../../elements/Flexbox';
import Section from '../../elements/Section';
import SectionHeading from '../../elements/SectionHeading';

export interface ProjectSectionProps {
  projects: Project[];
}

const ProjectSection: FC<ProjectSectionProps> = ({ projects }) => (
  <Section hash="projects">
    <Animation delay={250} duration={500} variant="bottom">
      <SectionHeading>Projects</SectionHeading>
      <Flexbox direction="column" gap="1rem">
        {projects?.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </Flexbox>
    </Animation>
  </Section>
);

export default ProjectSection;