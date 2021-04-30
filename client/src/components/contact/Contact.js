import React from 'react';
import classes from '../../assets/css/Contact.module.css';
import Container from '../ui-elements/Container';
import Button from '../ui-elements/buttons/PrimaryButton';
import ScrollAnimation from 'react-animate-on-scroll';

const Contact = (props) => {
  return (
    <Container>
      <div className={classes.Contact}>
        <ScrollAnimation animateIn="fadeIn">
          <h1 className="Title">Contact us<span>.</span></h1>
          <div className={classes.SubtitleContainer}>
            <p className={classes.Subtitle}>
              If you are looking for software services tailored for your business drop us a line bellow.
            </p>
          </div>
        </ScrollAnimation>
        <form className={classes.Form} onSubmit={(e) => {e.preventDefault()}}>
          <input type="text" placeholder="Your email address"/>
          <textarea cols="30" rows="10" placeholder="Tell us what you have in mind"></textarea>
        </form>
        <Button>SEND message</Button>
      </div>
    </Container>
  );
}

export default Contact;