import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'

export default class RightSide extends Component {

  render() {
    const style = {
      margin: 12,
    };

    const {cuid} = this.props
    
    return (
      <div className='raised-button' style={{ width: "50%" }}> 
         <Link to={`/profile/${cuid}`}><RaisedButton label="My Profile" primary style={style} /></Link>
         <RaisedButton onClick={this.props.logout} label="Logout" primary buttonStyle={{ backgroundColor: 'gray' }}/>
      </div>
    )
  }
}
