import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import NavigationList from './NavigationList';
import { Rotate as Hamburger } from 'hamburger-react';
import logo from '../../assets/images/logo_blue.png';
import Container from '../ui-elements/Container';


const StyledNavbar = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.scrolled ? 'white' : 'transparent'};
  box-shadow: ${props => props.scrolled ? '0px 3px 15px rgba(0,0,0,0.2)' : 'none'};

  span {
    display: none;
  }

  img {
    height: 50%;
    margin-left: 7.5%;
  }

  @media (max-width: 800px) {
    padding-right: 20px;

    span {
      display: inline;
    }
  }
`;

const NavigationDrawer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 3;
  bottom: -80px;
  left: ${props => props.opened ? '0' : ' -120vw'};
  background-color: white;
  display: flex;
  align-items: center;
  transition: all .4s;

  ul {
    list-style: none;
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: space-around;
    flex-flow: column;
    align-items: center;
  }

  ul li a {
    text-decoration: none;
    color: black;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 4em;
    transition: all .4s;
  }

  ul li a:hover {
    color: #045DE9;
  }
`;

const Navbar = () => {

  var [isScrolled, toggleIsScrolled] = useState(false);
  var [drawerOpened, toggleDrawer] = useState(false);
  var [hamburgerColor, switchColor] = useState('white');
  
  useEffect(() => {
    const handleScroll = () => {
      if(!drawerOpened) {
        if (window.scrollY > 100) {
          switchColor('black');
          toggleIsScrolled(true);
        } else  {
          switchColor('white');
          toggleIsScrolled(false);
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [drawerOpened]);

  const clickOnButton = () => {
    toggleDrawer(!drawerOpened);
    if(window.scrollY <= 100) {
      toggleIsScrolled(!isScrolled);
      switchColor('black');
    }
  }

  return (
    <Container>
      <StyledNavbar scrolled={isScrolled}>
        <img src={logo} alt="Logo not found."/>
        <NavigationList scrolled={isScrolled} />
        <NavigationDrawer opened={drawerOpened}>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/">OUR WORK</a></li>
            <li><a href="/">CONTACT</a></li>
          </ul>
        </NavigationDrawer>
        <span>
          <Hamburger 
            color={hamburgerColor}
            toggled={drawerOpened}
            toggle={() => {clickOnButton()}}
          />
        </span>
      </StyledNavbar>
    </Container>
  );
}

export default Navbar;