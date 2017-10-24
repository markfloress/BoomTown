import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import { CardItem, ProfileCard } from '../../components/cards'
import { connect } from 'react-redux'
import { getCardItems } from '../../actions'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import './styles.css'



class Profile extends Component {
  // componentDidMount() {
  //   this.props.getCardItems()
  // }

  render() {
    if (this.props.data.loading) return null    
    const singleUser = this.props.data.user
    const userItems = singleUser.items
    console.log("profile", userItems)    

    singleUser.items.map((x) => {
      console.log('single', x)
    })

    return (
      <div className='cards-overview'>
        <ProfileCard className="testt1" data={singleUser ? singleUser: {} } />
        <Masonry>
          {userItems.map((x) => {
            <div key={x.id} className="singlecard-container">
              <CardItem data={x}/>
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
      title
    }
  }
}


`

// export default connect((store) => store.users, { getCardItems })(Profile);
export default graphql(fetchUsers, {
  options: ownProps => ({
    variables: {
      id: ownProps.match.params.id
    }
  })
})(Profile);
