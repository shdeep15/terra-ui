import React from 'react';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Markdown from 'terra-markdown';
import Particles from 'react-particles-js';
import HomeParticleConfig from './HomeParticleConfig';
import ReadMe from '../../../README.md';
import imgTerra from '../../assets/terra.png';
import styles from './Home.scss';

const cx = classNames.bind(styles);

const particleStyle = { background: `url(${imgTerra}) no-repeat 50% calc(50%) / 250px 250px #223` };

const Home = () => (
  <div className={cx(['home'])}>
    <div className={cx(['particles'])}>
      <Particles style={particleStyle} params={HomeParticleConfig} />
    </div>
    <div className={cx(['content'])}>
      <Markdown src={ReadMe} />
    </div>  
  </div>
);

export default Home;
