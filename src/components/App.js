import React, { Component } from 'react';
import './main.css';
import HeaderShow from './HeaderShow';
import EpisodeList from './EpisodeList';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    return (
      <main role="main">
        <HeaderShow />
        <EpisodeList />
      </main>
    );
  }
}
