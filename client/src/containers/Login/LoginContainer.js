import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { formValueSelector, reduxForm, getFormValues } from "redux-form";
import { connect } from "react-redux";
import * as firebase from "firebase";

import PropTypes from "prop-types";

import Login from "./Login";
import store from "../../redux/store";

class LoginContainer extends Component {
  static propTypes = {};

  login = async e => {
    e.preventDefault()
    const { email, password } = this.props.currentUser;
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);

    } catch (err) {
      let errorCode = err.errorCode;
      let errorMessage = err.errorMessage;
      return console.log(errorCode, errorMessage);
    }
  };

  render() {
    console.log('auth',this.state)

    if(this.props.isAuthenticated){
      return <Redirect to="/"/>
    } else {
      return <Login login={this.login} />;
    }
  }
}

const mapStateToProps = (state) => {  
  const values = formValueSelector("loginForm");
  return {
    currentUser: values(state, 'email', 'password'),
    isAuthenticated: state.auth.user
  };
}

export default connect(mapStateToProps)(LoginContainer);
