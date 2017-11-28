import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import * as firebase from "firebase"



export default class RightSide extends Component {

  _logout(){
   firebase.auth().signOut()
   // .then(function() {
   //   // Sign-out successful.
   // }, function(error) {
   //   // An error happened.
   // });
  }

  render() {
    const style = {
      margin: 12,
    };
    
    return (
      <div className='raised-button' style={{ width: "50%" }}> 
         <RaisedButton label="My Profile" primary style={style} />
         <RaisedButton onClick={() => this._logout()} label="Logout" primary buttonStyle={{ backgroundColor: 'gray' }}/>
      </div>
    )
  }
}
