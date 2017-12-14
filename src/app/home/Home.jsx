import React from 'react';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Markdown from 'terra-markdown';
import Particles from 'react-particles-js';
import HomeParticleConfig from './HomeParticleConfig';
import ReadMe from '../../../README.md';
import imgTerra from '../../assets/terra.png';
import HomeAbout from './HomeAbout';
import HomeMoreInfo from './HomeMoreInfo';
import HomeModular from './HomeModular';
import HomeTech from './HomeTech';
import HomeFooter from './HomeFooter';
import styles from './Home.scss';

const cx = classNames.bind(styles);

const particleStyle = { background: `url(${imgTerra}) no-repeat 50% calc(50%) / 250px 250px #223` };

const Home = () => (
  <div className={cx(['home'])}>
    <div className={cx(['particles'])}>
      <Particles style={particleStyle} params={HomeParticleConfig} />
      <div className={cx(['title-container'])}>
        <h1 className={styles['title']}>{'Terra UI'}</h1>
      </div>
    </div>
    <div className={cx(['content'])}>
      <HomeAbout />
      <HomeMoreInfo />
      <HomeModular />
      <HomeTech />
      <HomeFooter />
    </div>
  </div>
);

export default Home;
