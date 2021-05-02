import React, {useEffect, useState} from 'react';
import classes from '../../assets/css/OurWork.module.css';
import codewaves from '../../assets/images/codewaves.png';
import greedy from '../../assets/images/greedy.png';
import polls from '../../assets/images/polls.png';

const IMAGES = [
  {
    image: codewaves,
    text: 'Codewaves.io: E-learning platform for beginners in programing.'
  },
  {
    image: greedy,
    text: 'Greedy.io: Live code sharing  web application.'
  },
  {
    image: polls,
    text: 'Polls: Private poll web application for local organisation.'
  },
  {image: null, text: ''}
];

const SlideShow = (props) => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => prevIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if(index === 3) setIndex(0);
  }, [index])

  return(
    <div className={classes.SlideShowContainer}>
      <div className={classes.ImageWrapper}>
        <img src={IMAGES[index].image} alt="Project not found!"/>
      </div>
      <p>{IMAGES[index].text}.</p>
    </div>
  );
}

export default SlideShow;