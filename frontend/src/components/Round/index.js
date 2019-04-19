import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import Select from '../../components/Select';
import './styles.scss';

const onChangeHandler = (e) => {
  console.log(e);
}

const Round = ({ roundNumber, playerName, gameOptions }) => (
  <div className='round'>
    <h1 className='round__title'>Round { roundNumber }</h1>
    <h2 className='round__playerName'>{ playerName }</h2>
    <Select options={gameOptions} onChange={onChangeHandler} />
    <Button text='Ok' />
  </div>
);

Round.defaultProps = {
  roundNumber:  0,
  playerName: 'Duvan',
  gameOptions: [
    {
      id: '1',
      name: 'Rock1'
    },
    {
      id: '2',
      name: 'Rock2'
    },
    {
      id: '3',
      name: 'Rock3'
    }
  ]
}

Round.propTypes = {
  roundNumber: PropTypes.number.isRequired,
  playerName: PropTypes.string.isRequired,

};

export default Round;