import React from 'react';
import styled from 'styled-components';

const PrimaryStyledButton = styled.button`
  outline: none;
  border: none;
  display: block;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  position: relative;
  color: #fff;
  font-size: 1em;
  background-color: var(--btn);
  padding: 17px 60px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.20);
  height: 60px;
  border-radius: 5px;

  span {
    position: relative; 
    z-index: 4;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 490%;
    width: 140%;
    background: var(--primary);
    -webkit-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
    -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
    transform: translateX(-98%) translateY(-25%) rotate(45deg);
  }

  &:hover:after {
    -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
    transform: translateX(-9%) translateY(-25%) rotate(45deg);
  }
`;

const PrimaryButton = (props) => <PrimaryStyledButton><span>{props.children}</span></PrimaryStyledButton>;


export default PrimaryButton;