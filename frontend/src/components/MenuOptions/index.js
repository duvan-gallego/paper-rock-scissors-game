import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import cn from 'classnames';
import './styles.scss';

const options = [
  {
    displayName: 'HOME',
    link: '/'
  },
  {
    displayName: 'PRODUCTS',
    link: '/products'
  },
  {
    displayName: 'CLIENTS',
    link: '/clients'
  },
  {
    displayName: 'CONTACT',
    link: '/contact'
  }
];

const MenuOptions = ({ location }) => {
  const pathName = location.pathname.includes('/products') ? '/products' : location.pathname;
  return (
    <>
      {
        options.map(option => (
          <Link
            to={option.link}
            key={option.link}
            className={cn('menuOptions', { 'menuOptions--active' : pathName === option.link })}
          >
            {option.displayName}
          </Link >
        ))
      }
    </>
  )
};

MenuOptions.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(MenuOptions);
