import React, { Component } from 'react'
import {CardItem} from '../../components/cards'



class Share extends Component {
  render() {
    return (
      <div className='share-container'>
        <div className='share-card'>
          <CardItem />
        </div>


        <div className='progress-bar'>
          
        </div>
      </div>
    )
  }
}


// // export default connect((store) => store.users, { getCardItems })(Profile);
// export default graphql(fetchUsers, {
//   options: ownProps => ({
//     variables: {
//       id: ownProps.match.params.id
//     }
//   })
// })(Profile);
