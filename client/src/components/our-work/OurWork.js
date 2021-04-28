import React from 'react';
import classes from '../../assets/css/OurWork.module.css';
import Container from '../ui-elements/Container';
import ScrollAnimation from 'react-animate-on-scroll';
import SlideShow from './SlideShow';

const OurWork = () => {
  return (
    <Container>
      <div className={classes.OurWork}>
        <div className={classes.LeftSide}>
          <SlideShow />
        </div>
        <div className={classes.RightSide}>
          <h1 className={classes.Title}>
            <ScrollAnimation animateOnce animateIn="fadeInLeft">
              Some of
            </ScrollAnimation> 
            <ScrollAnimation animateOnce animateIn="fadeInRight" delay={200}>
              our work<span>.</span>
            </ScrollAnimation>
          </h1>
        </div>
      </div>
    </Container>
  );
}

export default OurWork;