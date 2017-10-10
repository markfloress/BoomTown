import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'


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
