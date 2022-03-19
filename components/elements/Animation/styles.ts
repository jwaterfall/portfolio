import styled from 'styled-components';

import { AnimationVariant } from '.';

export const StyledAnimation = styled.div<{
  variant: AnimationVariant;
  show: boolean;
  duration: number;
  width?: string;
}>`
  ${(props) =>
    !props.show && props.variant === 'top' && 'transform: translateY(-3rem);'}
  ${(props) =>
    !props.show && props.variant === 'bottom' && 'transform: translateY(3rem);'}
  ${(props) =>
    !props.show && props.variant === 'left' && 'transform: translateX(-3rem);'}
  ${(props) =>
    !props.show && props.variant === 'right' && 'transform: translateX(3rem);'}
  ${(props) => !props.show && 'opacity: 0;'}
  transition: ease-in-out ${(props) => props.duration}ms;
  width: fit-content;
  ${(props) => props.width && `width: ${props.width};`}
`;
