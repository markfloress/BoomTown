import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import client from './config/apolloClient';
import * as firebase from 'firebase'

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import { login, logout } from './redux/loginReducer';
import CardContainer from './containers/Cards';
import { Profile } from './containers/Profile';
import { Login } from './containers/Login';
import { Share } from './containers/Share';
import { CantBeFound } from './containers/CantBeFound';
import store from './redux/store'

const config = {
    apiKey: "AIzaSyDXiCv9TB9VvY0tOqr6wy2p7SIuK35ojVM",
    authDomain: "fir-49812.firebaseapp.com",
    databaseURL: "https://fir-49812.firebaseio.com",
    projectId: "fir-49812",
    storageBucket: "fir-49812.appspot.com",
    messagingSenderId: "499694923001"
  };
  firebase.initializeApp(config);
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      store.dispatch(login(user));
    } else {
      store.dispatch(logout());
    }
  });

const Boomtown = () => (
<ApolloProvider store={store} client={client}>
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={CardContainer}/>
                    <Route path='/login' component={Login}/>                    
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
