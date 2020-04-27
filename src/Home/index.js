import React , { useState } from 'react';
import Card from '../components/Card';
import jsonData from '../data/data.json';
import ScoreCard from '../components/ScoreCard';
import './style.css';

const Home = () => {
  const data = jsonData.questions;
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const saveScore = (answer) => {
    setIndex(index + 1)
    return answer === data[index].correct_answer ? setScore(score + 1) : false;
  }

  const reset = () => {
    setIndex(0);
    setScore(0);
  }
  
  return (
    <div className='home-container'>
      { data.length > index ? 
        <Card 
          question={data[index].question} 
          answers={data[index].answers} 
          handleClick={saveScore}
        />
        :
        <ScoreCard 
          playAgain={reset} 
          score={score}
        />
        }
    </div>
  );
}

export default Home;