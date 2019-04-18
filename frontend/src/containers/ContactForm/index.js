import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TextField, Button } from 'react-md';
import cn from 'classnames';
import sendContactForm from './actions';
import './styles.scss';


const ContactForm = ({ fields, sendContactForm: sendContactFormAction }) => {

  const [formValues, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: ''
  });

  const [formInvalid, setInvalid] = useState(true);

  useEffect(() => {
    let invalidValues = false;
    Object.keys(formValues).forEach((key) => {
      if (formValues[key] === '' && !invalidValues) {
        invalidValues = true;
      }
    });

    setInvalid(invalidValues);
  });

  const handleOnChange = (value, e) => {
    setValues({ ...formValues, [ e.target.id ]: value });
  }

  const handleOnClick = () => {
    sendContactFormAction(formValues);
    setValues({
      firstName: '',
      lastName: '',
      email: '',
      subject: ''
    });
  }

  return (
    <div className="contactForm">
      {
        fields.map(field =>
          <TextField
            lineDirection="center"
            onChange={handleOnChange}
            { ...field }
            value={formValues[field.id]}
          />
        )
      }
      <Button
        flat
        className={cn('contactForm__button', { 'contactForm__button--disabled' : formInvalid })}
        disabled={formInvalid}
        onClick={handleOnClick}
      >
        SUBMIT
      </Button>
    </div>
  )
};

ContactForm.propTypes = {
  fields: PropTypes.array.isRequired,
  sendContactForm: PropTypes.func.isRequired,
};

export default connect(null, { sendContactForm })(ContactForm);