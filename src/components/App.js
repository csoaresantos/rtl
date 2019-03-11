import React, { Component } from 'react';
import './main.css';
import HeaderShow from './HeaderShow';
import EpisodeList from './EpisodeList';

export default () => (
    <main role="main">
      <HeaderShow />
      <EpisodeList />
    </main>
)
