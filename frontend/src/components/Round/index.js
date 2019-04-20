import React, {  useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import Select from '../../components/Select';
import './styles.scss';

const Round = ({ roundNumber, playerName, gameOptions, onSelectOption, onClickInOk }) => {
  const [optionSelected, setOption] = useState("");

  const onClickHandler = () => {
    setOption('');
    onClickInOk();
  }

  const onChangeHandler = (e) => {
    let option = e.target.value;
    setOption(option);
    onSelectOption(option);
  }

  return (
    <div className='round'>
      <h1>Round { roundNumber }</h1>
      <h2 className='round__playerName'>{ playerName }</h2>
      <Select options={gameOptions} onChange={onChangeHandler} value={optionSelected} />
      <Button text='Ok' onClick={onClickHandler} />
    </div>
  );
}

Round.defaultProps = {
  roundNumber:  0,
  playerName: 'Player Name...',
  gameOptions: [ ]
}

Round.propTypes = {
  roundNumber: PropTypes.number.isRequired,
  playerName: PropTypes.string.isRequired,
  onSelectOption: PropTypes.func.isRequired,
  onClickInOk: PropTypes.func.isRequired,
};

export default Round;