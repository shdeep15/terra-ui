import React from 'react';
import './DocHero.scss';
import myImage from './DocHeroImage.jpg';
import terraLogo from './terra-ui.png';
import Button from 'terra-button';

class DocHero extends React.Component {

  render() {
    var sectionStyle = {
      backgroundImage: 'url(' + myImage + ')',
      height: "500px",
    };

    return (
      <div className="hero-image" style={ sectionStyle }>
        <div className="hero-text">
          <img height="150px" src={terraLogo} />
          <h1>terra</h1>
          <Button variant="primary" href="/getting_started">Getting Started</Button>
        </div>
      </div>
    );
  }
}

export default DocHero;
