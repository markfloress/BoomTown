import React, {Component} from 'react';
import { RightSide, LeftSide } from './index';
import './styles.css';
import { logout } from '../../redux/modules/loginReducer'
import { getFilterTags } from '../../redux/modules/filterTagReducer'
import * as firebase from "firebase"
import { connect } from "react-redux";
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'


class Header extends Component {
  handleChange = (event, index, values) => {
    console.log(values);
    this.props.dispatch(getFilterTags(values))
  };

  _logout = ()=>{
    firebase.auth().signOut()
    .then(() => {
      this.props.dispatch(logout())
    })
   }

  render () {
    const {currentUser, data} = this.props

   return (
     <div className='NavBarStyle'>
      <LeftSide names={!this.props.data.loading ? data.tags : []} values={this.props.filterTags} handleChange={this.handleChange}/>
      <RightSide logout={this._logout} cuid={currentUser ? currentUser.uid : false}/>
    </div>
   )
 }
}

const fetchTags = gql `
  query fetchTags {
    tags{
      title,
      tagid
    }
  }
`

function mapStateToProps(state){
  return {
    currentUser: state.auth.user,
    filterTags: state.filterTag.filterTags
  }
}

const filteredTagsHeader = graphql(fetchTags)(Header)

export default connect(mapStateToProps)(filteredTagsHeader)