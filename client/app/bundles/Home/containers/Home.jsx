import React from 'react';
import DocNavbar from '../components/DocNavbar';
import DocHero from '../components/DocHero';
import DocSection1 from '../components/DocSection1';
import DocCardRow from '../components/DocCardRow';
import DocFooter from '../components/DocFooter';

class Home extends React.Component {
  render() {
    return (
      <div>
        <DocNavbar />
        <DocHero />
        <DocSection1 />
        <DocCardRow />
        <DocSection1 />
        <DocCardRow />
        <DocSection1 />
        <DocFooter />
      </div>
    );
  }
}

export default Home;
