import React from 'react';
import classes from '../../assets/css/How.module.css';
import Container from '../../components/ui-elements/Container';
import ScrollAnimation from 'react-animate-on-scroll';
import IconContainer from './HowIcon';

const How = () => {
  return (
    <Container>
      <div className={classes.HowContainer}>
          <div className={classes.LeftSide}>
            <ScrollAnimation animateOnce animateIn="fadeIn">
              <h1 className={classes.Title}>How we <br/> do things<span>.</span></h1>
            </ScrollAnimation>
          </div>
          <div className={classes.RightSide}>
            <div className={classes.ContentWrapper}>

              {/* Only show this on mobile. */}
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

              <div className={classes.OneItemRow, classes.ButtonRow}>
                <button>Get in TOuch</button>
              </div>

            </div>
          </div>
      </div>
    </Container>
  );
}

export default How;