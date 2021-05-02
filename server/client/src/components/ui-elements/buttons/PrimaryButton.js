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
  z-index: 2;
  transition: all .4s;

  span {
    position: relative; 
    z-index: 4;
  }

  &:hover {
    background-color: var(--btn-dark);
  }
`;

export default PrimaryStyledButton;