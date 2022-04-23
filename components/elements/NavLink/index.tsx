import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { FC, ReactElement, cloneElement } from 'react';

import { Wrapper } from './styles';

export interface INavLinkProps extends LinkProps {
  children: ReactElement;
  onClick?: () => void;
}

const NavLink: FC<INavLinkProps> = ({ children, href, onClick, ...props }) => {
  const { asPath: currentPath } = useRouter();

  if (currentPath === href) {
    return (
      <Link href={href} {...props} passHref>
        <Wrapper onClick={onClick}>
          {cloneElement(children, {
            className: `${children.props.className} active`,
          })}
        </Wrapper>
      </Link>
    );
  }

  return (
    <Link href={href} {...props} passHref>
      <Wrapper onClick={onClick}>{children}</Wrapper>
    </Link>
  );
};

export default NavLink;
