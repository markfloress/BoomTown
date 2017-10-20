import React, {Component} from 'react';
import Masonry from 'react-masonry-component';
import './styles.css';
import {CardItem} from '../../components/cards'
import { connect } from 'react-redux'
import { getCardItems } from '../../actions'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


class CardContainer extends Component {
  render () {
    if (this.props.data.loading) return null
    const itemList = this.props.data.items
    console.log('test', this.props.data.items)
    
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


// const CardContainer = ({ data }) => (
//   console.log(data)
//   // <div className='cards-overview'>
//   //   <Masonry>
//   //     {data.map((x) => 
//   //       <div key={x.id} className="singlecard-container">
//   //       <CardItem data={x}/>
//   //     </div>)}
//   //   </Masonry>
//   // </div>
// );

const fetchItems = gql `
  query fetchItems {
    items{
      id
      title
      description
      imageurl
      tags
      itemowner {
        id
        fullname
        email
      }
      created
      available
      borrower {
        id
      }
    }
  }



`

// export default connect((store) => store.users, {getCardItems})(CardContainer);


export default graphql(fetchItems)(CardContainer);
// fetch movies will be the query function replacing render and return and input them to moviesList