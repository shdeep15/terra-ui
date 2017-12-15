import React from 'react';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';
import Header from 'terra-clinical-header';

import MenuList from '../common/menu/MenuList';
import MenuListItem from '../common/menu/MenuListItem';


const propTypes = {
  routingStackDelegate: RoutingStackDelegate.propType,
};

const ComponentsMenu = ({ routingStackDelegate, config }) => (
  <MenuList
    headerText="Components"
    routingStackDelegate={routingStackDelegate}
  >
    {[].concat(...config.map((packageConfig) => {
      const links = config.map((packageConfig) => {
        const packageSectionHeader = (
          <Header
            key={packageConfig.name}
            title={packageConfig.name}
            isSubheader
          />
        )
        return [packageSectionHeader].concat(...packageConfig.components.map((exampleConfig) => {
          return (
            <MenuListItem
              key={exampleConfig.path}
              id={exampleConfig.path}
              path={exampleConfig.path}
              text={exampleConfig.name}
            />
          );
        }));
      });

      return [].concat(...links);
    }))}
  </MenuList>
);

ComponentsMenu.propTypes = propTypes;

export default ComponentsMenu;
