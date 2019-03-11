import React from 'react';
import NoImage from '../no-img-landscape-text.png';
import { Link } from 'react-router-dom';

export default ({image, name, summary, runtime}) => (
    <div class="col-md-4" style={{marginLeft: 33+'%', marginTop: 3+'%'}}>
        <div class="card mb-4 shadow-sm">
        <img class="card-img-top" src={image != undefined ? image.medium : NoImage} alt="Card image cap" />
        <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{summary}</p>
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