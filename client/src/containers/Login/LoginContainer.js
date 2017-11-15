import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from "redux-form";
import { connect } from 'react-redux'
import * as firebase from "firebase";

import PropTypes from 'prop-types';

import Login from './Login';

class LoginContainer extends Component {

    static propTypes = {
    };

    login = async(e) => {
        const { username, password } = this.props.currentUser;

        try {
            await firebase.auth().signInWithEmailAndPassword(username, password)
        } catch(err) {
            let errorCode = err.errorCode
            let errorMessage = err.errorMessage
            return console.log(errorCode, errorMessage)
        }
    }

    render() {
        return (
            <Login login={this.login} />
        );
    }
}

const loginContainer = reduxForm({
    form: "loginContainer"
})(LoginContainer)

function mapStateToProps(state){
    const values = formValueSelector('loginContainer')
    return {
        currentUser: values(state, "username", "password")
    }
}

export default connect(mapStateToProps)(loginContainer);
