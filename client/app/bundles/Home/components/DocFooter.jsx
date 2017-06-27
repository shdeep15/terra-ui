import React from 'react';
import Grid from 'terra-grid';
import './DocFooter.scss';

class DocFooter extends React.Component {

  render() {
    return (
      <footer className='doc-footer'>
        <Grid>
          <Grid.Row>
            <Grid.Column col={2} />
            <Grid.Column col={2}>
              <h3>Section heading</h3>
              <p>Second Column content </p>
            </Grid.Column>
            <Grid.Column col={2}>
              <h3>Section heading</h3>
              <p>Third Column content </p>
              <ul>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
              </ul>
            </Grid.Column>
            <Grid.Column col={2}>
              <h3>Section heading</h3>
              <p>Fourth Column content </p>
            </Grid.Column>
            <Grid.Column col={2}>
              <h3>Section heading</h3>
              <p>Fifth Column content </p>
            </Grid.Column>
            <Grid.Column col={2} />
          </Grid.Row>
        </Grid>
      </footer>
    );
  } 
}

export default DocFooter;
