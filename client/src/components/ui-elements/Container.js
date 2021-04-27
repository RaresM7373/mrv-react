import React from 'react';
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

const Container = (props) => <ContainerDiv>{props.children}</ContainerDiv>

export default Container;