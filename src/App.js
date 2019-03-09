import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import NoImage from './no-img-landscape-text.png';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getEpisodes} from './actions/episodesActions';
import Main from './Main';

class App extends Component {

  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    this.props.getEpisodes();
  }

  render() {
    
    const episodes = this.props.list ? this.props.list : [];
    
    return (
      <main role="main">
  
        <Main />


      
        <div class="album py-5 bg-light">
          <div class="container">
          <h2>Episodes</h2>
            <div class="row">
              {
                episodes.map(data =>  {

                let episodeSummary = data.summary;
                episodeSummary = episodeSummary != undefined ? episodeSummary.replace(/<p>/g, '') : null;
                episodeSummary = episodeSummary != undefined ? episodeSummary.replace('</p>', '') : null;

                  const link = `/EpisodeDetail/${data.id}`;
                  return (
                    <div class="col-md-4" key={data.id}>
                      <div class="card mb-4 shadow-sm">
                    
                        <img src={data.image != undefined ? data.image.medium : NoImage} />
                        <div class="card-body">
                          <strong class="d-inline-block mb-2 text-primary">{data.name}</strong>
                          <p class="card-text">{episodeSummary}</p>
                          <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                              <Link to={link}>View Episode</Link>
                            </div>
                            <small class="text-muted">{data.runtime}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              )
            }

          </div>
        </div>
      </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({ list: state.list.episode })
const mapDispatchToProps = dispatch => bindActionCreators({getEpisodes}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(App);
