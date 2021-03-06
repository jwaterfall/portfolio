import styled from 'styled-components';

import { TypographyAlign, TypographyFont } from './';

interface Props {
  align?: TypographyAlign;
  font?: TypographyFont;
  m?: string;
  p?: string;
}

const BaseTypography = styled.div<Props>`
  margin: ${(props) => props.m ?? 0};
  padding: ${(props) => props.p ?? 0};
  ${(props) =>
    props.font === 'secondary' &&
    `font-family: ${props.theme.fontFamilySecondary};`};
  ${(props) => props.align && `text-align: ${props.align};`};
`;

export const P = styled(BaseTypography).attrs({
  as: 'p',
})<Props>`
  font-size: ${(props) => props.theme.fontSizeMd};
  font-weight: ${(props) => props.theme.fontWeightRegular};
  font-family: ${(props) => props.theme.fontFamily};
  line-height: 1.75rem;
  color: ${(props) => props.theme.textSecondary};
  white-space: pre-line;
  overflow-wrap: anywhere;
  & > p {
    margin: 0;
  }
  & a {
    color: ${(props) => props.theme.primary};
    text-decoration: none;
    position: relative;
    display: inline-block;
    &::after {
      display: block;
      content: '';
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${(props) => props.theme.primary};
      transition: ${(props) => props.theme.transition};
      opacity: 0.5;
    }
    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
`;

export const H1 = styled(BaseTypography).attrs({
  as: 'h1',
})<Props>`
  font-size: clamp(40px, 8vw, 80px);
  font-weight: ${(props) => props.theme.fontWeightExtraBold};
`;

export const H2 = styled(BaseTypography).attrs({
  as: 'h2',
})<Props>`
  font-size: ${(props) => props.theme.fontSizeXxl};
  font-weight: ${(props) => props.theme.fontWeightBold};
`;

export const H3 = styled(BaseTypography).attrs({
  as: 'h3',
})<Props>`
  font-size: ${(props) => props.theme.fontSizeXl};
  font-weight: ${(props) => props.theme.fontWeightBold};
`;

export const H4 = styled(BaseTypography).attrs({
  as: 'h4',
})<Props>`
  font-size: ${(props) => props.theme.fontSizeLg};
  font-weight: ${(props) => props.theme.fontWeightMedium};
`;

export const H5 = styled(BaseTypography).attrs({
  as: 'h5',
})<Props>`
  font-size: ${(props) => props.theme.fontSizeMd};
  font-weight: ${(props) => props.theme.fontWeightMedium};
`;

export const H6 = styled(BaseTypography).attrs({
  as: 'h6',
})<Props>`
  font-size: ${(props) => props.theme.fontSizeSm};
  font-weight: ${(props) => props.theme.fontWeightRegular};
`;
