import React, {Component} from 'react';
import Masonry from 'react-masonry-component';
import './styles.css';
import {CardItem} from '../../components/cards'
import { connect } from 'react-redux'
import { getCardItems } from '../../actions'


class CardContainer extends Component {
  state = {
    data: [],
  };

  componentDidMount() {

    this.props.getCardItems()
    // const url = ['http://localhost:3001/items', 'http://localhost:3001/users'] 
    
    // Promise.all(url.map(url => fetch(url).then(response => response.json())))
    // .then(data => { 
    //   const [items, users] = data
    //   const itemWithUser = items.map((item) => {
    //     return {
    //       ...item,
    //       key: item.id,
    //       user: users.find(user => user.id === item.itemOwner),
    //     }
    //   })
    //   this.setState({data: itemWithUser})})
  }
  
  render () {
    const itemList = this.props.items    
    // console.log("pops", this.props.items.length)
    console.log("test", itemList)    
    
   return (
     <div className='cards-overview'>
      <Masonry>
       {itemList === undefined ? null : itemList.map((x) => 
        <div key={x.id} className="singlecard-container">
          <CardItem data={x}/>
        </div>)}
      </Masonry>
    </div>

   )
 }
}

export default connect((store) => store.users, {getCardItems})(CardContainer);
