import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

const propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

const generateRoutes = config => {
  const routes = config.map((packageConfig) => {
    return packageConfig.components.map((exampleConfig) => {
      return <Route key={exampleConfig.path} path={exampleConfig.path} component={exampleConfig.component} />
    });
  });

  return [].concat(...routes);
};

const generateRedirect = (config) => {
  return <Redirect to={config[0].components[0].path} />;
};

class Components extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.element && prevProps.location.pathname !== this.props.location.pathname) {
      this.element.scrollTop = 0;
    }
  }

  render() {
    const { config } = this.props;

    return (
      <div ref={(element) => { this.element = element; }} style={{ height: '100%', position: 'relative', overflow: 'auto' }}>
        <Switch>
          {generateRoutes(config)}
          {generateRedirect(config)}
        </Switch>
      </div>
    );
  }
}

Components.propTypes = propTypes;

export default withRouter(Components);
