import React from 'react';
import styled from 'styled-components';

const StyledAnchor = styled.a`
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2em;
  color: ${props => props.scrolled ? 'var(--black)' : 'white'};
  transition: all .4s;
  position: relative;
  padding-bottom: 5px;
  margin-left: 40px;

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: var(--primary);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  &:hover:after {
    width: 100%; 
    left: 0; 
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

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
        <li><StyledAnchor scrolled={props.scrolled} href="/">Our Work</StyledAnchor></li>
        <li><StyledAnchor scrolled={props.scrolled} href="/">Contact</StyledAnchor></li>
      </StyledList>
   </div>
  );
} 

export default NavigationList;