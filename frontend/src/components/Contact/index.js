import React from 'react';
import ContactForm from '../../containers/ContactForm';
import './styles.scss';
import fields from './fields';

const Contact = () =>  (
  <div className="contact">
    <ContactForm fields={ fields } />
  </div>
);

export default Contact;