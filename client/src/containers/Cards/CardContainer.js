import React, {Component} from 'react'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import Masonry from 'react-masonry-component'
import gql from 'graphql-tag'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import CircularProgress from 'material-ui/CircularProgress'
import ContentAdd from 'material-ui/svg-icons/content/add'

import {CardItem} from '../../components/cards'
import './styles.css'

class CardContainer extends Component {
  render () {
    const {data, tags} = this.props

    if (data.loading) return <CircularProgress size={100} thickness={5} style={{margin: "auto auto"}}/>
    const itemList = data.items

    const newList = itemList.filter(item => {
      if(item.tags.some(tag => tags.findIndex(singleTag => singleTag === tag.title) > -1)){
        return item
      }
      return newList
    })
    
    const itemToDisplay = tags.length > 0 ? newList: itemList

      return (
        <div className='cards-overview'>
         <Masonry>
          {itemToDisplay.map((x) => 
           <div key={x.id} className="singlecard-container">
             <CardItem data={x}/>
           </div>)}
         </Masonry>
         <Link to={`/share`}> 
           <FloatingActionButton secondary={true} className='share-button'>
             <ContentAdd />
           </FloatingActionButton>
         </Link>
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

function mapStateToProps(state){
  return {
    user: state.auth.user,
    tags: state.filterTag.filterTags
  }
}

const fetchCardContainer =  graphql(fetchItems)(CardContainer)
export default connect(mapStateToProps)(fetchCardContainer)