import { FC } from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

import { Container, SocialLink } from './styles';

const SocialLinks: FC = () => (
  <Container>
    <SocialLink>
      <FaGithub />
    </SocialLink>
    <SocialLink>
      <FaLinkedinIn />
    </SocialLink>
    <SocialLink>
      <FaTwitter />
    </SocialLink>
    <SocialLink>
      <FaInstagram />
    </SocialLink>
  </Container>
);

export default SocialLinks;
