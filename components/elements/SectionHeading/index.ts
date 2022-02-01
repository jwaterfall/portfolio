import styled from 'styled-components';

const SectionHeading = styled.h2`
  margin: 0.625rem 0 2.5rem;
  font-size: ${(props) => props.theme.fontSizeXxl};
  font-weight: ${(props) => props.theme.fontWeightSemiBold};
  font-family: ${(props) => props.theme.fontFamilySecondary};
  display: flex;
  align-items: center;
  &::before {
    content: '//';
    margin-right: 0.25rem;
    color: ${(props) => props.theme.primary};
  }
  &::after {
    content: '';
    display: block;
    flex: 1;
    max-width: 25rem;
    height: 1px;
    margin-left: 1rem;
    background-color: ${(props) => props.theme.primary};
  }
`;

export default SectionHeading;
