import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Gravatar from 'react-gravatar'
import './styles.css'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import moment from 'moment'

class CardItem extends Component {
  render() {
    const {available, borrower, created, description, imageurl, itemowner, title, tags} = this.props.data
    const tag = tags.map((tag) => tag.title)
    const createdDate = moment(created).fromNow()

    return (
        <Card className="single-card">
        <CardMedia 
          overlay={ borrower && <CardTitle subtitle="Unavailable" style={{ textTransform: "uppercase" }}/>}
        >
          <img src={imageurl} alt="Item Image" />
        </CardMedia>
        <Link to={`/profile/${itemowner.id}`}>
          <CardHeader
          title={itemowner.fullname}
          subtitle={createdDate}
          avatar={<Gravatar email={itemowner.email} style={{ borderRadius: "50%" }}/>}
          />
        </Link>
        <CardTitle title={title} subtitle={tag.join(", ")}/>
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