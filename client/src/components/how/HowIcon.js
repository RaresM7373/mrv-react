import React from 'react';
import classes from '../../assets/css/How.module.css';
import { RiPencilRuler2Line } from "react-icons/ri";
import { AiOutlineFileSearch, AiOutlineCode } from 'react-icons/ai';
import { CgCalculator } from 'react-icons/cg';
import { FaRegLightbulb } from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll';


const HowIcon = (props) => {

  const returnIcon = () => {
    let icon;
    switch(props.text.toLowerCase()) {
      case 'design':
        icon = <RiPencilRuler2Line />;
        break;
      case 'research':
        icon = <AiOutlineFileSearch/>;
        break;
      case 'cost est.':
        icon = <CgCalculator/>
        break;
      case 'development':
        icon = <AiOutlineCode/>
        break;
      case 'delivery':
        icon = <FaRegLightbulb/>
        break;
    }
    return icon;
  }

  return (
    <ScrollAnimation animateOnce animateIn='fadeIn' delay={props.delay}>
      <div className={classes.IconContainer}>
        <h1>{returnIcon()}</h1>
        <p>{props.text}</p>
      </div>
    </ScrollAnimation>
  );
}

export default HowIcon;