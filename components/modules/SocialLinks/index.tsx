import { FC } from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

import { Container, SocialLink } from './styles';

const SocialLinks: FC = () => (
  <Container>
    <SocialLink href="https://github.com/jwaterfall/portfolio" target="_blank">
      <FaGithub />
    </SocialLink>
    <SocialLink
      href="https://www.linkedin.com/in/jack-waterfall-7384571a6/"
      target="_blank"
    >
      <FaLinkedinIn />
    </SocialLink>
    {/* <SocialLink>
      <FaTwitter />
    </SocialLink>
    <SocialLink>
      <FaInstagram />
    </SocialLink> */}
  </Container>
);

export default SocialLinks;
