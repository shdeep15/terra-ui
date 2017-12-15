import React from 'react';
import PropTypes from 'prop-types';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';
import LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';
import { Consumer } from 'xfc';

import exampleConfig from '../site-example-config/config.json';

Consumer.init();

const generateEmbeddedExample = (path) => (
  class EmbeddedContentWrapper extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authorized: false,
      }
    }

    render() {
      return (
        <OverlayContainer style={{ height: '100%', position: 'relative' }}>
          <EmbeddedContentConsumer
            src={path}
            onAuthorize={() => {
              this.setState({
                authorized: true,
              })
            }}
            style={{ height: '100%', width: '100%', position: 'absolute' }}
          />
          <LoadingOverlay
            isRelativeToContainer
            isOpen={!this.state.authorized}
            isAnimated
          />
        </OverlayContainer>
      )
    }
  }
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
