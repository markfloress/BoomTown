import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from "redux-form";


import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {ValidatedEmailField } from '../../components/ValidatedTextField/ValidatedTextField';
import {ValidatedPassField } from '../../components/ValidatedTextField/ValidatedTextField';

import './styles.css';
import logo from '../../images/boomtown-logo.svg';
import bottomLeft from '../../images/home-bl.svg';
import topRight from '../../images/home-tr.svg';

const Login =  ({ login }) => {
    return (
        <div className="page login">
            <div className="logo">
                <img src={logo} alt="Boomtown Logo" />
            </div>
            <div className="topRight">
                <img src={topRight} alt="Sky" />
            </div>
            <div className="bottomLeft">
                <img src={bottomLeft} alt="City" />
            </div>

            
            <div className="cardContainer">
                <Paper zDepth={5}>
                    <div className="formContainer">
                        <form onSubmit={login} autoComplete="off">
                            <div>
                                <Field name='email' label="Email" component={ValidatedEmailField}/>
                            </div>
                            <div>
                                <Field name='password' label="Password" component={ValidatedPassField}/>
                            </div>
                            <RaisedButton className="enterButton" primary fullWidth type="submit" label='Enter' />
                        </form>
                    </div>
                </Paper>
            </div>

        </div>
    )
}

const loginForm = reduxForm({
    form:'loginForm'
  })(Login)

// Login.propTypes = {
//     // login: PropTypes.func.isRequired
// };

export default loginForm;