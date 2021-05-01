import React from 'react';
import classes from '../../assets/css/Footer.module.css';
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/images/logo_blue.png';
import StyledAnchor from '../ui-elements/Anchor';

const Footer = () => {
  return (
    <footer>
      <div className={classes.FooterContainer}>

        <div className={classes.MainRow}>
          <div className={classes.IconsContainer}>
            <img src={logo} alt="Logo not found."/>
          </div>
          <div className={classes.IconsContainer}>
            <StyledAnchor equalSpacing scrolled>Home</StyledAnchor>
            <StyledAnchor equalSpacing scrolled>Blog</StyledAnchor>
            <StyledAnchor equalSpacing scrolled>Our Work</StyledAnchor>
            <StyledAnchor equalSpacing scrolled>Contact</StyledAnchor>
          </div>
          <div className={classes.IconsContainer}>
            <p>Stay in touch</p>
          </div>
          <div className={classes.IconsContainer}>
            <h1><FaInstagram /></h1>
            <h1><FaGithub /></h1>
            <h1><FaLinkedin /></h1>
            <h1><FaTwitter /></h1>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;