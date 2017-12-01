import React, {Component} from 'react'
import Masonry from 'react-masonry-component'
import './styles.css'
import {CardItem} from '../../components/cards'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { Link } from 'react-router-dom'
import CircularProgress from 'material-ui/CircularProgress'
import * as firebase from "firebase"
import { Redirect } from "react-router-dom"


// var inventory = [
//   {name: 'apples', quantity: 2},
//   {name: 'bananas', quantity: 0},
//   {name: 'cherries', quantity: 5}
// ];

// function filterTags(tags) { 
//   return tags.title === this.props.tags;
// }

// console.log(inventory.find(findCherries));
// { name: 'cherries', quantity: 5 }



class CardContainer extends Component {
  render () {
    const {data, tags} = this.props

    if (data.loading) return <CircularProgress size={100} thickness={5} style={{margin: "auto auto"}}/>
    const itemList = data.items
    // console.log('hi',itemList.tag)


    const newList = itemList.filter(item => {
      if(item.tags.some(tag => tags.findIndex(singleTag => singleTag === tag.title) > -1)){
        return item
      }
    })

    console.log('filter',newList)
    
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
// fetch movies will be the query function replacing render and return and input them to moviesList