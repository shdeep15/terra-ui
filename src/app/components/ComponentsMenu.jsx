import React from 'react';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';

import MenuList from '../common/menu/MenuList';

const propTypes = {
  routingStackDelegate: RoutingStackDelegate.propType,
};

const ComponentsMenu = ({ routingStackDelegate, config }) => (
  <MenuList
    headerText="Components"
    routingStackDelegate={routingStackDelegate}
    links={[].concat(...config.map((packageConfig) => {
      const links = config.map((packageConfig) => {
        return packageConfig.components.map((exampleConfig) => {
          return {
            id: exampleConfig.path,
            path: exampleConfig.path,
            text: exampleConfig.name,
          };
        });
      });

      return [].concat(...links);
    }))}
  />
);

ComponentsMenu.propTypes = propTypes;

export default ComponentsMenu;
