import React, { Component } from 'react';
import './main.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getEpisodes} from './actions/episodesActions';
import ListItemHTML from './ListItemHTML';

class EpisodeList extends Component {

  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    this.props.getEpisodes();
  }

  render() {
    const episodes = this.props.list ? this.props.list : [];

    return (
      
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
                    <ListItemHTML 
                      id={data.id} 
                      image={data.image} 
                      name={data.name} 
                      summary={episodeSummary} 
                      runtime={data.runtime} 
                      link={link} />
                  )
                }
              )
            }

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ list: state.list.episode })
const mapDispatchToProps = dispatch => bindActionCreators({getEpisodes}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(EpisodeList);
