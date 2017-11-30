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
import { login, logout } from "./redux/modules/loginReducer";
import CardContainer from "./containers/Cards";
import { Profile } from "./containers/Profile";
import LoginContainer from "./containers/Login";
import { Share } from "./containers/Share";
import { CantBeFound } from "./containers/CantBeFound";
import initStore from "./redux/store";
import { connect } from "react-redux";

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

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = firebase.auth().currentUser;

  if (user !== null && user !== undefined) {
    return (
      <Route
        {...rest}
        location={rest.location}
        render={props => <Component {...props} />}
      />
    );
  } else {
    return (
      <Route
        {...rest}
        render={props => (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )}
      />
    );
  }
};


const Boomtown = () => (
  <ApolloProvider store={store} client={client}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router>
        <Layout>
          <Switch>
            <PrivateRoute exact path="/" component={CardContainer} />
            <Route path="/login" component={LoginContainer} />
            <PrivateRoute path="/profile/:id" component={Profile} />
            <PrivateRoute path="/share" component={Share} />
            <Route component={CantBeFound} />
          </Switch>
        </Layout>
      </Router>
    </MuiThemeProvider>
  </ApolloProvider>
);

connect(state => {
  return {
    user: state.auth.user
  };
})(PrivateRoute);

ReactDOM.render(<Boomtown />, document.getElementById("root"));
registerServiceWorker();
