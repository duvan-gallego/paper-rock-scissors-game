import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

/*const onChangeHandler = (event) => {
  console.log(event.target.name);
  console.log(event.target.value);
} */

const InputText = ({ name, placeholder, onChange }) => (
  <input
    type='text'
    placeholder={placeholder}
    name={name}
    className='inputText'
    onChange={onChange}
  />
);

/*InputText.defaultProps = {
  name: 'inputText'
}*/

InputText.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  maxChars: PropTypes.number,
};

export default InputText;

