import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Select = ({ options, onChange }) => (
  <select className='select' onChange={onChange}>
    <option value=''>Select Move...</option>
    {options.map(option =>
        <option key={option._id} value={option._id}>{option.name}</option>
      )
    }
  </select>
);

Select.defaultProps = {
  options: []
}

Select.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
};

export default Select;

