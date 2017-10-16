import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Gravatar from 'react-gravatar'
import './styles.css'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import moment from 'moment'

class CardItem extends Component {
  render() {
    const {available, borrower, created, description, key, imageurl, tags, itemowner, title, user} = this.props.data
    const {fullname, email} = user[0]
    const createdDate = moment(created).fromNow()

    return (
        <Card className="single-card">
        <CardMedia 
          overlay={ !available && <CardTitle subtitle="Unavailable" style={{ textTransform: "uppercase" }}/>}
        >
          <img src={imageurl} alt="Item Image" />
        </CardMedia>
        <Link to={`/profile/${itemowner}`}>
          <CardHeader
          title={fullname}
          subtitle={createdDate}
          avatar={<Gravatar email={email} style={{ borderRadius: "50%" }}/>}
          />
        </Link>
        <CardTitle title={title} subtitle={tags.join(", ")} />
        <CardText>
          {description} 
        </CardText>
        <CardActions>
          {!borrower && <RaisedButton label="Borrow" 
          primary buttonStyle={{ backgroundColor: 'gray' }} 
          labelStyle={{ textTransform: "uppercase" }}/>}
        </CardActions>
      </Card>
    )
  }
}

export default CardItem