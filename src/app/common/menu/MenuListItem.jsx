import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './MenuListItem.scss';

const propTypes = {
  id: PropTypes.string,
  path: PropTypes.string,
  text: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

const MenuListItem = ({ id, path, text, location }) => (
  <NavLink
    key={id}
    className="cm-link"
    location={location}
    to={path}
    activeStyle={{
      fontWeight: 'bold',
    }}
  >
    {text}
  </NavLink>
);

MenuListItem.propTypes = propTypes;

export default MenuListItem;
