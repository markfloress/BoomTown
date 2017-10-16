import React from 'react';
import { Provider } from 'react-redux'
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
import configStore from './configStore'

const store = configStore()

const Boomtown = () => (
<Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
            <Layout>
                <Switch>
                    {/* <Login /> */}
                    <Route exact path='/' component={CardContainer}/>
                    <Route path='/profile/:id' component={Profile}/>                    
                    <Route component={CantBeFound}/>
                </Switch>   
            </Layout>
        </Router>
    </MuiThemeProvider>
</Provider>
);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
