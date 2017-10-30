import React, { Component } from 'react'
import { ShareCard } from '../../components/cards'
import { ProgressBar } from '../../components/Share'
import { graphql } from 'react-apollo'


class Share extends Component {
  render() {
    return (
      <div>
        <div className='share-card'>
          <ShareCard />
        </div>
        <div className='share-progress'>
          <ProgressBar />
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

export default Share;