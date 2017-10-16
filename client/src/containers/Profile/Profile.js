import React, {Component} from 'react';
import Masonry from 'react-masonry-component';
import {CardItem, ProfileCard} from '../../components/cards'
import { connect } from 'react-redux'
import { getCardItems } from '../../actions'


class Profile extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.props.getCardItems()
  }
  
  render () {  
    const itemList = this.props.items
    const link = window.location.href
    // this.props.users.map((user) => {
    // const blah = link.match(user.id)
    
    //   if (user.id === blah) {
    //     console.log("works")
    //     // return user
    //   } else {
    //     console.log("fail", blah.index)
    //   }
    // })

   return (
     <div className='cards-overview'>
       <ProfileCard data={this.props.users}/>
      <Masonry>
      {itemList.map((x) => 
        <div key={x.id} className="singlecard-container">
          <CardItem data={x}/>
        </div>)}
      </Masonry>
    </div>
   )
 }
}

export default connect((store) => store.users, {getCardItems})(Profile);