import React from 'react';
import NoImage from '../no-img-landscape-text.png';
import { Link } from 'react-router-dom';

export default ({image, name, summary, runtime}) => (
    <div className="col-md-4" style={{marginLeft: 33+'%', marginTop: 3+'%'}}>
        <div className="card mb-4 shadow-sm">
        <img className="card-img-top" src={image != undefined ? image.medium : NoImage} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{summary}</p>
            <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
                <Link to="/">Back</Link>
            </div>
            <small className="text-muted">{runtime} min</small>
            </div>
        </div>
        </div>
    </div>
)