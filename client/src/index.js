import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import Login from './containers/Login';
import CardContainer from './containers/Cards';
import { Profile } from './containers/Profile';
import { CantBeFound } from './containers/CantBeFound';




const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
            <Layout>
                {/* <Login /> */}
                <CardContainer/>
                <Route exact path='/' component={CardContainer}/>
                <Route path='/profile' component={Profile}/>
                <Route component={CantBeFound}/>   
            </Layout>
        </Router>
    </MuiThemeProvider>

);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
