import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import '../index.css';

import App from './App';
import Detail from './Detail';

//Redux
import { Provider } from 'react-redux';

//Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>

                <Route exact path="/" component={App} />
                <Route path="/detail" component={Detail} />
            </div>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root