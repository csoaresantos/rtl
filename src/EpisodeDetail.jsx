import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NoImage from './no-img-landscape-text.png';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getEpisode} from './actions/detailActions';

class EpisodeDetail extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const { id } = this.props.match.params;
        this.props.getEpisode(id);
    }

    render() {
        console.log(this.props.detail)
        const { name, image, runtime } = this.props.detail != undefined ? this.props.detail : {};
        let summaryFormatted = this.props.detail != undefined ? this.props.detail.summary : '';
        summaryFormatted = summaryFormatted != undefined ? summaryFormatted.replace(/<p>/g, '') : null;
        summaryFormatted = summaryFormatted != undefined ? summaryFormatted.replace('</p>', '') : null;

        return (
        <div class="col-md-4" style={{marginLeft: 33+'%', marginTop: 3+'%'}}>
          <div class="card mb-4 shadow-sm">
          <img class="card-img-top" src={image != undefined ? image.medium : NoImage} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{summaryFormatted}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <Link to="/">Back</Link>
                </div>
                <small class="text-muted">{runtime} min</small>
              </div>
            </div>
          </div>
        </div>
        )
    }
}

const mapStateToProps = state => ({ detail: state.detail.detail })
const mapDispatchToProps = dispatch => bindActionCreators({getEpisode}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(EpisodeDetail);