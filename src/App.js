import React, { Component } from 'react';
import './main.css';
import Main from './Main';
import EpisodeList from './EpisodeList';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    return (
      <main role="main">
        <Main />
        <EpisodeList />
      </main>
    );
  }
}
