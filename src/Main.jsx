import React, { Component } from 'react';
import './main.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getShow } from './actions/showActions';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getShow();
    }

    render() {
        const { show } = this.props;
        let showSummary = show.summary;
        showSummary = showSummary != undefined ? show.summary.replace(/<p>/g, '') : null;
        showSummary = showSummary ? showSummary.replace('</p>', '') : null;
        
        return (
              <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div class="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 class="display-4 font-weight-normal">{show.name}</h1>
                    <p class="lead font-weight-normal">{showSummary}</p>
                    <a class="btn btn-outline-secondary" href="#">Coming soon</a>
                </div>
                <div class="product-device shadow-sm d-none d-md-block"></div>
                <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
              </div>
        );
    }
}

const mapStateToProps = state => ({ show: state.show.info })
const mapDispatchToProps = dispatch => bindActionCreators({getShow}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Main);