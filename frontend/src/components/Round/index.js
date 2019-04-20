import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import Select from '../../components/Select';
import './styles.scss';

const Round = ({ roundNumber, playerName, gameOptions, onSelectOption, onClickHandler }) => (
  <div className='round'>
    <h1>Round { roundNumber }</h1>
    <h2 className='round__playerName'>{ playerName }</h2>
    <Select options={gameOptions} onChange={onSelectOption} />
    <Button text='Ok' onClick={onClickHandler} />
  </div>
);

Round.defaultProps = {
  roundNumber:  0,
  playerName: 'Player Name...',
  gameOptions: [ ]
}

Round.propTypes = {
  roundNumber: PropTypes.number.isRequired,
  playerName: PropTypes.string.isRequired,
  onSelectOption: PropTypes.func.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default Round;