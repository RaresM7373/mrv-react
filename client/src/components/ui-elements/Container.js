import styled from 'styled-components';

const ContainerDiv = styled.div`
  width: 85%;
  margin: auto;
  max-width: 1600px;

  @media (max-width: 800px) {
    width: 90%;
    margin-right: 5%;
    margin-left: 5%;
  }
`;

export default ContainerDiv;