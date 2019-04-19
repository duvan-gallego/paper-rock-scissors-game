import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import InputText from '../../components/InputText';
import initGame from './actions';

import './styles.scss';
const MAX_CHARACTERS = 100;

const Home = (props) => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const { initGame: initGameAction, game } = props;

  const starHandler = () => {
    if (player1 && player2 && player1.length <= MAX_CHARACTERS &&  player2.length <= MAX_CHARACTERS) {
      initGameAction({ player1, player2});
    } else {
      alert('Error: You must enter the two names of the players and they must have less than 100 characters');
    }
  }

  return (
    <>
      {
        game
        ? (
          <Redirect to='/playing' />
      ) : (
        <div className='home'>
          <h1 className='home__title'>Enter player's Names</h1>
          <form>
            <InputText name='player1' placeholder='Player 1' onChange={e => setPlayer1(e.target.value)} />
            <InputText name='player2' placeholder='Player 2' onChange={e => setPlayer2(e.target.value)} />
            <Button text='Start' onClick={starHandler} />
          </form>
        </div>
      )
      }
    </>
  );
}

Home.propTypes = {
  initGame: PropTypes.func.isRequired,
  game: PropTypes.object,
};

const mapStateToProps = ({ game }) => ({ game });

export default connect(mapStateToProps, { initGame })(Home);