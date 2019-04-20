import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Round from '../../components/Round';
import Score from '../../components/Score';
import { getGameMoves, chooseOption, getWinner } from './actions';

import './styles.scss';

const Playing = (props) => {
  const [optionSelected, setOption] = useState("");

  const {
    getGameMoves: getGameMovesAction,
    chooseOption: chooseOptionAction,
    getWinner: getWinnerAction,
    game
  } = props;

  let round = 1;

  if (game.rounds.length) {
    let cantOfRounds = game.rounds.length;
    round = game.rounds[cantOfRounds - 1].player2Option ? cantOfRounds + 1 : cantOfRounds;
  }

  const firstPlayer = game.rounds[round - 1] ? false : true;
  const actualPlayer = firstPlayer ? game.player1 : game.player2;

  useEffect(() => {
    if (!game.moves.length) {
      getGameMovesAction();
    }
  }, []);

  const onSelectOption = (option) => {
    setOption(option);
  }

  const onClickInOk = () => {
    if (optionSelected) {
      chooseOptionAction(optionSelected, round, firstPlayer);
      if (!firstPlayer) {
        getWinnerAction(game._id, game.rounds[round - 1].player1Option, game.rounds[round - 1].player2Option);
      }
    } else {
      alert('You must choose an option');
    }
  }

  return (
    <div className='playing'>
      {game && game.player1 &&  game.player2 && game.player1._id && game.player2._id
        ? (
          <>
            <Round
              roundNumber={round}
              playerName={actualPlayer.name}
              gameOptions={game.moves}
              onSelectOption={onSelectOption}
              onClickInOk={onClickInOk}
            />
            {round !== 1 &&
              <Score rounds={game.rounds} />
            }
          </>
        ) : (
          <Redirect to='/' />
        )
      }
    </div>
  )
}

Playing.propTypes = {
  getGameMoves: PropTypes.func.isRequired,
  chooseOption: PropTypes.func.isRequired,
  game: PropTypes.object,
};

const mapStateToProps = ({ game }) => ({ game });
const actions = {
  getGameMoves,
  chooseOption,
  getWinner,
};

export default connect(mapStateToProps, actions)(Playing);;