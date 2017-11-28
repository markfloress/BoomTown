import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const _logout = () => {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }, function(error) {
    // An error happened.
  });
}


export default class RightSide extends Component {
  render() {
    const style = {
      margin: 12,
    };
    
    return (
      <div className='raised-button' style={{ width: "50%" }}> 
         <RaisedButton label="My Profile" primary style={style} />
         <RaisedButton label="Logout" primary buttonStyle={{ backgroundColor: 'gray' }}/>
      </div>
    )
  }
}
