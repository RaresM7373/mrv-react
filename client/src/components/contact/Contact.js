import React, {useState} from 'react';
import classes from '../../assets/css/Contact.module.css';
import Container from '../ui-elements/Container';
import Button from '../ui-elements/buttons/PrimaryButton';
import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios';

const Contact = (props) => {

  const [email, changeEmail] = useState('');
  const [message, changeMessage] = useState('');

  const sendMessage = async () => {
    let response = await axios.post('/send_message', {email, message});
    console.log(response);
  }

  return (
    <Container>
      <div id="contact" className={classes.Contact}>
        <ScrollAnimation animateOnce animateIn="fadeIn">
          <h1 className="Title">Contact us<span>.</span></h1>
          <div className={classes.SubtitleContainer}>
            <p className={classes.Subtitle}>
              If you are looking for software services tailored for your business drop us a line bellow.
            </p>
          </div>
        </ScrollAnimation>
        <form className={classes.Form} onSubmit={(e) => {e.preventDefault()}}>
          <ScrollAnimation animateIn='fadeIn' animateOnce delay={150}>
            <input type="text" onChange={(e) => changeEmail(e.target.value)} placeholder="Your email address"/>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeIn' animateOnce delay={300}>
            <textarea onChange={(e) => changeMessage(e.target.value)} placeholder="Tell us what you have in mind"></textarea>
          </ScrollAnimation>
        </form>
        <ScrollAnimation animateIn='fadeIn' animateOnce delay={450}>
          <Button onClick={sendMessage}>SEND message</Button>
        </ScrollAnimation>
      </div>
    </Container>
  );
}

export default Contact;