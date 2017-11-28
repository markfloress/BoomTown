import React, {Component} from 'react';
import { RightSide, LeftSide } from './index';
import './styles.css';
import { logout } from '../../redux/modules/loginReducer'
import * as firebase from "firebase"
import { connect } from "react-redux";


class Header extends Component {
  state = {
    values: [],
    names: ['Electronics', 'Household Items', 'Musical Instruments',
    'Physical Media', 'Recreational Equipment', 'Sporting Goods', 'Tools']
  };

  handleChange = (event, index, values) => this.setState({values});

  _logout = ()=>{
    firebase.auth().signOut()
    .then(() => {
      this.props.dispatch(logout())
    })
   }

  render () {
    const {values, names} = this.state
    const {currentUser} = this.props

   return (
     <div className='NavBarStyle'>
      <LeftSide names={names} values={values} handleChange={this.handleChange}/>
      <RightSide logout={this._logout} cuid={currentUser ? currentUser.uid : false}/>
    </div>
   )
 }
}

function mapStateToProps(state){
  return {
    currentUser: state.auth.user
  }
}

export default connect(mapStateToProps)(Header)
