import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { FC, ReactElement, cloneElement } from 'react';

import { Wrapper } from './styles';

export interface INavLinkProps extends LinkProps {
  children: ReactElement;
}

const NavLink: FC<INavLinkProps> = ({ children, href, ...props }) => {
  const { asPath: currentPath } = useRouter();

  if (currentPath === href) {
    return (
      <Link href={href} {...props} passHref>
        <Wrapper>
          {cloneElement(children, {
            className: `${children.props.className} active`,
          })}
        </Wrapper>
      </Link>
    );
  }

  return (
    <Link href={href} {...props} passHref>
      <Wrapper>{children}</Wrapper>
    </Link>
  );
};

export default NavLink;
