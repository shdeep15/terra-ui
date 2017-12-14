import React from 'react';
import PropTypes from 'prop-types';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import { Consumer } from 'xfc';

import exampleConfig from '../site-example-config/config.json';

Consumer.init();

const generateEmbeddedExample = (path) => (
  () => (
    <EmbeddedContentConsumer src={path} style={{ height: '100%' }} />
  )
);

const componentConfig = Object.values(exampleConfig).map((packageEntry) => (
  {
    name: packageEntry.name,
    components: packageEntry.packages.map(exampleEntry => (
      {
        name: exampleEntry.name,
        path: `/components/${packageEntry.name.replace(/\s/g, '')}/${exampleEntry.name.replace(/\s/g, '')}`,
        component: generateEmbeddedExample(exampleEntry.url),
      }
    )),
  }
))

export default componentConfig;
