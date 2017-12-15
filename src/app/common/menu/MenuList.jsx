import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ContentContainer from 'terra-content-container';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';
import MenuToolbar from './MenuToolbar';

import './MenuList.scss';

const propTypes = {
  routingStackDelegate: RoutingStackDelegate.propType,
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    path: PropTypes.string,
    text: PropTypes.string,
  })),
  headerText: PropTypes.string,
};

const MenuList = ({ routingStackDelegate, children, headerText }) => (
  <div style={{ height: '100%', width: '100%', position: 'absolute' }}>
    <ContentContainer
      header={<MenuToolbar text={headerText} routingStackDelegate={routingStackDelegate} />}
      fill
    >
      <div className="cm-container">
        {children}
      </div>
    </ContentContainer>
  </div>
);

MenuList.propTypes = propTypes;

export default MenuList;
