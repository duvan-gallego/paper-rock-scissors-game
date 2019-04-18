import React from 'react';
import { Toolbar } from 'react-md';
import MenuOptions from '../MenuOptions';
import './styles.scss';

const Appnavbar = () => (
  <Toolbar
    colored
    fixed
    className="appNavBar"
  >
    <MenuOptions />
  </Toolbar>
);

export default Appnavbar;