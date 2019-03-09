import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import EpisodeDetail from './EpisodeDetail';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducers';
import promise from 'redux-promise';

import * as serviceWorker from './serviceWorker';

const store = applyMiddleware(promise)(createStore)(reducers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/EpisodeDetail/:id" component={EpisodeDetail} />
            </Switch>
        </BrowserRouter>
    </Provider>
,
document.getElementById('root'));

serviceWorker.unregister();
