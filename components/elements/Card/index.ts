import styled from 'styled-components';

const Card = styled.div`
  padding: 2rem;
  border-radius: 0.25rem;
  background: ${(props) => props.theme.foreground};
`;

export default Card;
