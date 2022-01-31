import styled from 'styled-components';

const ButtonContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
  }
`;

export default ButtonContainer;
