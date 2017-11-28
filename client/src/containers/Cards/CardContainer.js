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
import { Link } from 'react-router-dom'
import CircularProgress from 'material-ui/CircularProgress'
import * as firebase from "firebase"
import { Redirect } from "react-router-dom"


class CardContainer extends Component {
  render () {
    if (this.props.data.loading) return <CircularProgress size={100} thickness={5} style={{margin: "auto auto"}}/>
    const itemList = this.props.data.items

    if(this.props.user){

      console.log(this.props.user.uid)

      return (
        <div className='cards-overview'>
         <Masonry>
          {itemList.map((x) => 
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

    } else {
      return <Redirect to="/login"/>
    }

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
    user: state.auth.user
  }
}

const fetchCardContainer =  graphql(fetchItems)(CardContainer)
export default connect(mapStateToProps)(fetchCardContainer)
// fetch movies will be the query function replacing render and return and input them to moviesList