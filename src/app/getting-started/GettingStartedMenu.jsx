import React from 'react';
import { Link } from 'react-router-dom';
/* eslint-disable import/no-extraneous-dependencies */
import List from 'terra-list';
import Heading from 'terra-heading';
/* eslint-enable import/no-extraneous-dependencies */

const scrollToComponent = (id) => {
  document.querySelector(id).scrollIntoView();
};

const GettingStartedMenu = () => (
  <List>
    <List.Item content={<Heading level={1} size="large">Getting Started</Heading>} />
    <List.Item content={<Link to="/getting-started#what-is-terra-" onClick={() => { scrollToComponent('#what-is-terra-'); }} >What is Terra?</Link>} />
    <List.Item content={<Link to="/getting-started#features" onClick={() => { scrollToComponent('#features'); }} >Features</Link>} />
    <List.Item content={<Link to="/getting-started#installing-components" onClick={() => { scrollToComponent('#installing-components'); }} >Installing Components</Link>} />
    <List.Item content={<Link to="/getting-started#dependencies" onClick={() => { scrollToComponent('#dependencies'); }} >Dependencies</Link>} />
    <List.Item content={<Link to="/getting-started#basic-usage" onClick={() => { scrollToComponent('#basic-usage'); }} >Basic Usage</Link>} />
    <List.Item content={<Link to="/getting-started#configuring-webpack" onClick={() => { scrollToComponent('#configuring-webpack'); }} >Configuring Webpack</Link>} />
    <List.Item content={<Link to="/getting-started#internationalization-i18n-and-localization-l10n-" onClick={() => { scrollToComponent('#internationalization-i18n-and-localization-l10n-'); }} >I18n</Link>} />
    <List.Item content={<Link to="/getting-started#theming" onClick={() => { scrollToComponent('#theming'); }} >Theming</Link>} />
  </List>
);

export default GettingStartedMenu;
