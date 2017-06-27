import React from 'react';
import Button from 'terra-button';
import './DocCard.scss';

class DocCard extends React.Component {

  render() {
    return (
      <div className="card">
        <img src='http://via.placeholder.com/300x300' alt="Avatar" />
        <div className="container">
          <h4><b>My Card</b></h4>
          <br />
          <p>Content Here. This is where I would read more information about this specific feature</p>
          <br />
          <Button variant="primary">Click Here</Button>
        </div>
      </div>
    );
  }
}

export default DocCard;
