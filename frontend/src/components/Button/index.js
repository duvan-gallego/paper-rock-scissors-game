import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({ text, onClick }) => (
  <span
    className='button'
    role='button'
    onClick={onClick}
  >
    {text}
  </span>
);

Button.defaultProps = {
  text: 'Text'
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

