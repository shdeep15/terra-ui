import React from 'react';
import Home from './app/home/Home';
import GettingStarted from './app/getting-started/GettingStarted';
import GettingStartedMenu from './app/getting-started/GettingStartedMenu';
import ApplicationMenu from './app/ApplicationMenu';
import Tests from './app/tests/Tests';
import TestsMenu from './app/tests/TestsMenu';

import componentConfig from './componentConfig';

import Components from './app/components/Components';
import ComponentsMenu from './app/components/ComponentsMenu';
import ComponentTests from './app/tests/ComponentTests';
import ComponentTestsMenu from './app/tests/ComponentTestsMenu';

const injectConfig = config => (
  ComponentClass => (
    props => (
      <ComponentClass {...props} config={config} />
    )
  )
);

const navigation = {
  index: '/home',
  links: [{
    path: '/home',
    text: 'Home',
  }, {
    path: '/getting-started',
    text: 'Getting Started',
  }, {
    path: '/components',
    text: 'Components',
  }],
};

const routes = Object.freeze({
  content: {
    '/home': {
      path: '/home',
      component: {
        default: {
          componentClass: Home,
        },
      },
    },
    '/getting-started': {
      path: '/getting-started',
      component: {
        default: {
          componentClass: GettingStarted,
        },
      },
    },
    '/components': {
      path: '/components',
      component: {
        default: {
          componentClass: injectConfig(componentConfig)(Components),
        },
      },
    },
  },
  menu: {
    '/': {
      path: '/',
      component: {
        tiny: {
          componentClass: ApplicationMenu,
          props: {
            navigation,
          },
        },
        small: {
          componentClass: ApplicationMenu,
          props: {
            navigation,
          },
        },
      },
    },
    '/getting-started': {
      path: '/getting-started',
      component: {
        default: {
          componentClass: injectConfig(componentConfig)(GettingStartedMenu),
        },
      },
    },
    '/components': {
      path: '/components',
      component: {
        default: {
          componentClass: injectConfig(componentConfig)(ComponentsMenu),
        },
      },
    },
  },
});

export { routes, navigation };
