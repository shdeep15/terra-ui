import React from 'react';
import DocCard from './DocCard';
import './DocCardRow.scss';


class DocCardRow extends React.Component {
  render() {
    return (<div className="doc-card-row">
            <DocCard />
            <DocCard />
            <DocCard />
           </div>
           );
  }
}

export default DocCardRow;
