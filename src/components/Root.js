import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import '../index.css';

import AppHeader from './AppHeader';
import CategoriesList from './CategoriesList';
import Home from './Home';
import Detail from './Detail';

//Redux
import { Provider } from 'react-redux';

//Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <AppHeader />
                <CategoriesList />

                <Route exact path="/" component={Home} />
                <Route path="/detail" component={Detail} />
            </div>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root