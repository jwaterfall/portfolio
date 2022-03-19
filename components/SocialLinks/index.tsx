import { FC } from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import Animation from '../elements/Animation';
import { Flexbox } from '../elements/Box';
import { Container, SocialLink } from './styles';

const SocialLinks: FC = () => (
  <Container>
    <Animation delay={1000} variant="right">
      <Flexbox gap="1.5rem" direction="column">
        <SocialLink
          href="https://github.com/jwaterfall"
          target="_blank"
          rel="noopener"
        >
          <FaGithub />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/jack-waterfall-7384571a6/"
          target="_blank"
          rel="noopener"
        >
          <FaLinkedinIn />
        </SocialLink>
        <SocialLink href="mailto:jack.a.waterfall@gmail.com">
          <FaEnvelope />
        </SocialLink>
      </Flexbox>
    </Animation>
  </Container>
);

export default SocialLinks;
