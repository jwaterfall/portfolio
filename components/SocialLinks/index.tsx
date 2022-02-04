import { FC } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import Animation from '../elements/Animation';
import Flexbox from '../elements/Flexbox';
import { Container, SocialLink } from './styles';

const SocialLinks: FC = () => (
  <Container>
    <Animation delay={1000} variant="right">
      <Flexbox gap="1.5rem" direction="column">
        <SocialLink
          href="https://github.com/jwaterfall/portfolio"
          target="_blank"
        >
          <FaGithub />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/jack-waterfall-7384571a6/"
          target="_blank"
        >
          <FaLinkedinIn />
        </SocialLink>
      </Flexbox>
    </Animation>
  </Container>
);

export default SocialLinks;
