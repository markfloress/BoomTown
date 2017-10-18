import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import { CardItem, ProfileCard } from '../../components/cards'
import { connect } from 'react-redux'
import { getCardItems } from '../../actions'


class Profile extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.props.getCardItems()
  }

  render() {
    let dataSet = {}
    const itemList = this.props.users.find(x => {
      if (x.id === this.props.match.params.id) {
        return dataSet = {
          ...x
        }
      }
      return
    })

    return (
      <div className='cards-overview'>
        <ProfileCard data={itemList ? itemList: {} } />
        <Masonry>
          {/* {itemList.map((userItem) => {
            if (userItem.id === this.props.match.params.id) {
              <div key={userItem.id} className="singlecard-container">
                <CardItem data={userItem} />
              </div>
            }
          }
          )} */}
          {/* {console.log("shiet", itemList.item)} */}
        </Masonry>
      </div>
    )
  }
}

export default connect((store) => store.users, { getCardItems })(Profile);