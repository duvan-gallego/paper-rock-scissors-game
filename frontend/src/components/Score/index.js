import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Score = ({ rounds }) => (
  <div className='score'>
    <h1 className='score__title'>Score</h1>
    <table className='score__table'>
      <thead className='score__table-header'>
        <tr>
          <th>Round</th>
          <th>Winner</th>
        </tr>
      </thead>
      <tbody className='score__table-body'>
        {rounds.map((round, i) => (
          <tr key={i + 1}>
            <td>{i + 1}</td>
            <td>{round.winner || '-'}</td>
          </tr>
          ))
        }
      </tbody>
    </table>
  </div>
);

Score.propTypes = {
  rounds: PropTypes.array,
};

export default Score;

