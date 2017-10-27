import React, {Component} from 'react'
import Masonry from 'react-masonry-component'
import './styles.css'
import {CardItem} from '../../components/cards'
import { connect } from 'react-redux'
import { getCardItems } from '../../actions'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'


class CardContainer extends Component {
  render () {
    if (this.props.data.loading) return null
    const itemList = this.props.data.items
    
   return (
     <div className='cards-overview'>
      <Masonry>
       {itemList.map((x) => 
        <div key={x.id} className="singlecard-container">
          <CardItem data={x}/>
        </div>)}
      </Masonry>
      <FloatingActionButton secondary={true} className='share-button'>
        <ContentAdd />
      </FloatingActionButton>
    </div>

   )
 }
}

const fetchItems = gql `
  query fetchItems {
    items{
      id
      title
      description
      imageurl
      tags{
        title
      }
      itemowner {
        id
        fullname
        email
      }
      created
      borrower {
        id
      }
    }
  }
`


// export default connect((store) => store.users, {getCardItems})(CardContainer)


export default graphql(fetchItems)(CardContainer)
// fetch movies will be the query function replacing render and return and input them to moviesList