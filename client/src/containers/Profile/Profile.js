import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import { CardItem, ProfileCard } from '../../components/cards'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import CircularProgress from 'material-ui/CircularProgress';

class Profile extends Component {
  render() {
    console.log(this.props)
    if (this.props.data.loading) return <CircularProgress size={100} thickness={5} style={{margin: "auto auto"}}/>
    const singleUser = this.props.data.user
    const userItems = singleUser.items

    return (
      <div className='cards-overview'>
        <ProfileCard data={singleUser ? singleUser: {} } />
        <Masonry>
          {userItems.map((x) => {
            return <div key={x.id} className="singlecard-container">
                      <CardItem data = {x} />
                    </div>
          })}
        </Masonry>
      </div>
    )
  }
}


const fetchUsers = gql `
query fetchUsers($id: ID!) {
  user(id: $id){
    fullname
    id
    email
    bio
    borroweditems{
      title
    }
    items{
      id
      title
      description
      itemowner {
        id
      }
      imageurl
      tags{
        title
      }
      created
    }
  }
}`


export default graphql(fetchUsers, {
  options: ownProps => ({
    variables: {
      id: ownProps.match.params.id
    }
  })
})(Profile);
