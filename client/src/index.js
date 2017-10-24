import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import client from './config/apolloClient';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import Login from './containers/Login';
import CardContainer from './containers/Cards';
import { Profile } from './containers/Profile';
import { Share } from './containers/Share';
import { CantBeFound } from './containers/CantBeFound';
import configStore from './configStore'

const store = configStore()

const Boomtown = () => (
<ApolloProvider store={store} client={client}>
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
            <Layout>
                <Switch>
                    {/* <Login /> */}
                    <Route exact path='/' component={CardContainer}/>
                    <Route path='/profile/:id' component={Profile}/>
                    <Route path='/share' component={Share}/>
                    <Route component={CantBeFound}/>
                </Switch>
            </Layout>
        </Router>
    </MuiThemeProvider>
</ApolloProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
