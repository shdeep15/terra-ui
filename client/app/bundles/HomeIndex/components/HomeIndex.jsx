import React  from 'react';
import 'terra-mixins';

class HomeIndex extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default HomeIndex;
