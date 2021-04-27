import React from 'react';
import  classes from '../../assets/css/Hero.module.css';
import Overlay from '../ui-elements/Overlay';
import Container from '../ui-elements/Container';
import GlitchText from 'react-glitch-effect/core/GlitchText';

const Hero = () => {
  return (
   <div>
      <div className={classes.HeroLanding}>
        <Overlay></Overlay>
        
        <Container>
          <div className={classes.TitleContainer}>
            <GlitchText color1="pink" color2="blue" component='h1' disabled={false}>
              Crafting <br/> Software<span>.</span>
            </GlitchText>
            <div className={classes.Group}>
              <input type="text" placeholder="You email address"/>
              <button>GET A QUOTE</button>
            </div>
          </div>
        </Container>
        
      </div>
   </div>
  );
}

export default Hero;