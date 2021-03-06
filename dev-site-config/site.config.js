/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import 'terra-core/packages/terra-site/src/cerner-mock-theme.scss';

import navConfig from './navigation.config';
import componentConfig from './componentConfig';

const siteConfig = {
  /* The navigation configuration.  */
  navConfig,

  /* The component configuration. */
  componentConfig,

  appConfig: {
    /* The title for the site header. */
    title: 'Terra UI',

    /* The themes to toggle in the site. */
    themes: {
      'Default Theme': '',
      'Mock Theme': 'cerner-mock-theme',
    },

    extensions: {
      gitHubUrl: 'https://github.com/cerner?utf8=%E2%9C%93&q=terra&type=&language=',
    },
  },
};

export default siteConfig;
