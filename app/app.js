import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from 'store';

import App from 'layouts/app';

import Home from 'ui/home';
import Hero from 'ui/hero';

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>

            <Route component={App}>

                <Route path="/" component={Home} />
                <Route path="/hero/:id" component={Hero} />

            </Route>

        </Router>
    </Provider>
), document.getElementById('root'));