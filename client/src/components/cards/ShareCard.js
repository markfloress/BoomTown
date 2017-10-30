import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Gravatar from 'react-gravatar'
import './styles.css'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import moment from 'moment'

class ShareCard extends Component {
  render() {
    // console.log('with user', this.props.data)
    const createdDate = moment().fromNow()

    return (
        <Card className="share-card" style={{width: "45%", marginLeft: "35%"}}>
        {/* <CardMedia 
          overlay={ !available && <CardTitle subtitle="Unavailable" style={{ textTransform: "uppercase" }}/>}
        >
          <img src="{imageurl}" alt="Item Image" />
        </CardMedia> */}
        <Link to="{`/profile/${itemowner.id}`}">
          <CardHeader
          title="{itemowner.fullname}"
          subtitle="{createdDate}"

          />
        </Link>
        <CardTitle/>
        <CardText>
          description
        </CardText>
        <CardActions>
          {/* {!borrower && <RaisedButton label="Borrow" 
          primary buttonStyle={{ backgroundColor: 'gray' }} 
          labelStyle={{ textTransform: "uppercase" }}/>} */}
        </CardActions>
      </Card>
    )
  }
}

export default ShareCard