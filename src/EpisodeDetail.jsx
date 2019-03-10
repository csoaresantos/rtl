import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getEpisode} from './actions/detailActions';
import DetailHTML from './DetailHTML';

class EpisodeDetail extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const { id } = this.props.match.params;
        this.props.getEpisode(id);
    }

    render() {
        const { name, image, runtime } = this.props.detail != undefined ? this.props.detail : {};
        let summaryFormatted = this.props.detail != undefined ? this.props.detail.summary : '';
        summaryFormatted = summaryFormatted != undefined ? summaryFormatted.replace(/<p>/g, '') : null;
        summaryFormatted = summaryFormatted != undefined ? summaryFormatted.replace('</p>', '') : null;

        return (
          <DetailHTML 
            image={image} 
            name={name} 
            summary={summaryFormatted} 
            runtime={runtime} />
        );
    }
}

const mapStateToProps = state => ({ detail: state.detail.detail })
const mapDispatchToProps = dispatch => bindActionCreators({getEpisode}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(EpisodeDetail);