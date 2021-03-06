import styled from 'styled-components';

import { ButtonSize } from './';

export const PrimaryButton = styled.button<{
  size: ButtonSize;
  isFullWidth?: boolean;
}>`
  margin: 0;
  color: ${(props) => props.theme.primary};
  background: none;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 0.75rem;
  ${(props) =>
    props.size === 'md' &&
    `padding: 1rem 1.75rem; font-size: ${props.theme.fontSizeSm};`}
  ${(props) =>
    props.size === 'sm' &&
    `padding: 0.75rem 1rem; font-size: ${props.theme.fontSizeXs};`}
  font-family: ${(props) => props.theme.fontFamilySecondary};
  font-weight: ${(props) => props.theme.fontWeightRegular};
  text-decoration: none;
  cursor: pointer;
  transition: ${(props) => props.theme.transition};
  ${(props) => props.isFullWidth && 'width: 100%;'};
  &:hover {
    background: ${(props) => props.theme.buttonPrimaryHover};
    transform: translateY(-0.2rem);
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  color: ${(props) => props.theme.secondary};
  border-color: ${(props) => props.theme.secondary};
  &:hover {
    background: ${(props) => props.theme.buttonSecondaryHover};
  }
`;
