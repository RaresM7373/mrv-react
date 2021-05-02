import React from 'react';
import styled from 'styled-components';
import StyledAnchor from '../ui-elements/Anchor';

const StyledList = styled.ul`
  
  width: 45%;
  float: right;
  min-width: 500px;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0 7.5% 0 0;
  display: flex;
  justify-content: flex-end;
  color: pink;

  @media (max-width: 800px) {
    display: none;
    height: 0;
    width: 0;
  }
`;

const NavigationList = (props) => {
  return (
   <div>
      <StyledList>
        <li><StyledAnchor scrolled={props.scrolled} href="/">Home</StyledAnchor></li>
        <li><StyledAnchor scrolled={props.scrolled} href="#our-work">Our Work</StyledAnchor></li>
        <li><StyledAnchor scrolled={props.scrolled} href="#contact">Contact</StyledAnchor></li>
      </StyledList>
   </div>
  );
} 

export default NavigationList;