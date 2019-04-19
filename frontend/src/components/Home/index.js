import React, { useState } from 'react';
import Button from '../Button';
import InputText from '../InputText';

import './styles.scss';
const MAX_CHARACTERS = 100;

const Home = () => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const starHandler = () => {
    if (player1 && player2 && player1.length <= MAX_CHARACTERS &&  player2.length <= MAX_CHARACTERS) {
      console.log('Click in star');
      console.log(player1);
      console.log(player2);
    } else {
      alert('Error: You must enter the two names of the players and they must have less than 100 characters');
    }
  }

  return (
    <div className='home'>
      <h1 className='home__title'>Enter player's Names</h1>
      <form>
        <InputText name='player1' placeholder='Player 1' onChange={e => setPlayer1(e.target.value)} />
        <InputText name='player2' placeholder='Player 2' onChange={e => setPlayer2(e.target.value)} />
        <Button text='Start' onClick={starHandler} />
      </form>
    </div>
  );
}

export default Home;