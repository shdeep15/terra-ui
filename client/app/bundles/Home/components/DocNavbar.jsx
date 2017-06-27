import React from 'react';
import './DocNavbar.scss';
import Button from 'terra-button';

class DocNavbar extends React.Component {
  render() {
    return (
      <nav role="navigation" className="topnav">
        <a href="https://www.cerner.com/">Cerner</a>
        <a href="/overview">Overview</a>
        <a href="/getting_started">Getting Started</a>
        <a href="/components">Components</a>
      </nav>
    );
  }
}

export default DocNavbar;
