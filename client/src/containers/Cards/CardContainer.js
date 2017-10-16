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
  }
  
  render () {
    const itemList = this.props.items
    
   return (
     <div className='cards-overview'>
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

export default connect((store) => store.users, {getCardItems})(CardContainer);