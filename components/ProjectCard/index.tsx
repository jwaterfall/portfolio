import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { FC } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

import { Project } from '../../types';
import Box, { Flexbox } from '../elements/Box';
import Color from '../elements/Color';
import Typography from '../elements/Typography';
import { Container, Image, Link, RightSection } from './styles';

export type ProjectCardVariant = 'primary' | 'secondary';

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
        <Typography variant="h5">
          <Color>Featured</Color>
        </Typography>
        <Typography variant="h3">{project.title}</Typography>
        <Box margin="1rem 0">
          <Typography key={project.id}>
            {documentToReactComponents(project.description)}
          </Typography>
        </Box>
        <Flexbox columnGap="1rem" rowGap="0.25rem" flexWrap="wrap">
          {project.technologies.map((item, index) => (
            <Typography variant="h6" key={index}>
              <Color>{item}</Color>
            </Typography>
          ))}
        </Flexbox>
        <Flexbox gap="1rem" marginTop="0.5rem">
          {project.githubLink && (
            <Link href={project.githubLink} target="_blank" rel="noopener">
              <FaGithub />
            </Link>
          )}
          {project.link && (
            <Link href={project.link} target="_blank" rel="noopener">
              <FaLink />
            </Link>
          )}
        </Flexbox>
      </Flexbox>
    </RightSection>
  </Container>
);

export default ProjectCard;
