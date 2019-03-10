import React from 'react';
import NoImage from './no-img-landscape-text.png';
import { Link } from 'react-router-dom';

export default ({id, image, name, summary, runtime, link}) => (
    <div class="col-md-4" key={id}>
        <div class="card mb-4 shadow-sm">
        <img src={image != undefined ? image.medium : NoImage} />
            <div class="card-body">
            <strong class="d-inline-block mb-2 text-primary">{name}</strong>
            <p class="card-text">{summary}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <Link to={link}>View Episode</Link>
                    </div>
                    <small class="text-muted">{runtime}</small>
                </div>
            </div>
        </div>
    </div>
)