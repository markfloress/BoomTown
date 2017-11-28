import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import registerServiceWorker from "./registerServiceWorker";
import { ApolloProvider } from "react-apollo";
import client from "./config/apolloClient";
import * as firebase from "firebase";

import "./index.css";
import muiTheme from "./config/theme";

import Layout from "./components/Layout";
import { login, logout } from "./redux/loginReducer";
import CardContainer from "./containers/Cards";
import { Profile } from "./containers/Profile";
import LoginContainer from "./containers/Login";
import { Share } from "./containers/Share";
import { CantBeFound } from "./containers/CantBeFound";
import initStore from "./redux/store";

const store = initStore();

const config = {
    apiKey: "AIzaSyAxOWpW1i9TL6DMFtGCUy12DKmFl-ffDsQ",
    authDomain: "boomtown-491c3.firebaseapp.com",
    databaseURL: "https://boomtown-491c3.firebaseio.com",
    projectId: "boomtown-491c3",
    storageBucket: "boomtown-491c3.appspot.com",
    messagingSenderId: "203089060458"
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
            <Route exact path="/" component={CardContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/profile/:id" component={Profile} />
            <Route path="/share" component={Share} />
            <Route component={CantBeFound} />
          </Switch>
        </Layout>
      </Router>
    </MuiThemeProvider>
  </ApolloProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById("root"));
registerServiceWorker();
