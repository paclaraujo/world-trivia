import React from 'react';
import Button from '../Button/index';
import './style.css';

const ScoreCard = (props) => {
  return (
    <section className="score-container">
      <h3>Você fez:</h3>
      <div>{props.score}</div>
      <h3>Pontos</h3>
      <div class="btn-box">
        <Button handleClick={props.playAgain} title="Jogar novamente"/>
      </div>
  </section>
  )
}

export default ScoreCard;