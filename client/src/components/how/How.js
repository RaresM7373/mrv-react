import React from 'react';
import classes from '../../assets/css/How.module.css';
import Container from '../ui-elements/Container';
import ScrollAnimation from 'react-animate-on-scroll';
import IconContainer from './HowIcon';
import PrimaryButton from '../ui-elements/buttons/PrimaryButton';

const How = () => {
  return (
    <Container>
      <div className={classes.HowContainer}>
        <div className={classes.LeftSide}>
          <ScrollAnimation delay={250} animateOnce animateIn="fadeIn">
            <h1 className={classes.Title}>How we <br/> do things<span>.</span></h1>
          </ScrollAnimation>
          <ScrollAnimation animateOnce delay={1050} animateIn="fadeIn"> 
            <PrimaryButton>GET IN TOUCH</PrimaryButton> 
          </ScrollAnimation>
        </div>
        <div className={classes.RightSide}>
          <div className={classes.ContentWrapper}>
            <div className={classes.TwoItemsRow}>
              <IconContainer delay={400} text="RESEARCH"/>
              <IconContainer delay={550} text="COST EST."/>
              <IconContainer delay={650} text="DESIGN"/>
            </div>

            <div className={classes.TwoItemsRow}>
              <IconContainer delay={400} text="RESEARCH"/>
              <IconContainer delay={550} text="COST EST."/>
            </div>

            <div className={classes.OneItemRow}>
              <IconContainer delay={650} text="DESIGN"/>
            </div>

            <div className={classes.TwoItemsRow}>
              <IconContainer delay={750} text="DEVELOPMENT"/>
              <IconContainer delay={850} text="DELIVERY"/>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default How;