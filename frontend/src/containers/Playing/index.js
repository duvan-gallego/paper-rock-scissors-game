import React from 'react';

import Round from '../../components/Round';
import Score from '../../components/Score';

import './styles.scss';

const Playing = () => (
  <div className='playing'>
    <Round />
    <Score />
  </div>
)

export default Playing;