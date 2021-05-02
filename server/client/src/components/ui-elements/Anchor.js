import styled from 'styled-components';

const StyledAnchor = styled.a`
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  color: ${props => props.scrolled ? 'var(--black)' : 'white'};
  transition: all .4s;
  position: relative;
  padding-bottom: 5px;
  margin: ${props => props.equalSpacing ? '0 20px 0 20px' : '0 0 0 40px'};
  cursor: pointer;

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
`;

export default StyledAnchor;