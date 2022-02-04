import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { FC } from 'react';

import { Project } from '../../types';
import Color from '../elements/Color';
import Flexbox from '../elements/Flexbox';
import Typography from '../elements/Typography';
import { Container, Image, RightSection } from './styles';

export interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => (
  <Container>
    <Image
      src={`https:${project.thumbnail.fields.file.url}`}
      alt={project.thumbnail.fields.title}
    />
    <RightSection>
      <Flexbox direction="column" gap="0.5rem">
        <Typography variant="h5" font="secondary">
          <Color>Featured</Color>
        </Typography>
        <Typography variant="h3">{project.title}</Typography>
        <Typography key={project.id}>
          {documentToReactComponents(project.description)}
        </Typography>
        <Flexbox gap="1rem">
          {project.technologies.map((item, index) => (
            <Typography key={index} font="secondary">
              {item}
            </Typography>
          ))}
        </Flexbox>
      </Flexbox>
    </RightSection>
  </Container>
);

export default ProjectCard;
