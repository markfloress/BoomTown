import React, {Component} from 'react';
import Gravatar from 'react-gravatar';
import './styles.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class CardItem extends Component {
  render() {
    const {available, borrower, createdOn, description, key, imageUrl, tags, title, user} = this.props.data
    // console.log("hi", this.props.data)

    return (
        <Card className="single-card">
        <CardMedia 
          overlay={ !available && <CardTitle subtitle="Unavailable" style={{ textTransform: "uppercase" }}/>}
        >
          <img src={imageUrl} alt="Item Image" />
        </CardMedia>
        <CardHeader
          title={this.props.data.fullName}
          subtitle="{users.fullName}"
          avatar={<Gravatar email={this.props.data.email} style={{ borderRadius: "50%"}}/>}
        />
        {/* <CardTitle title={title} subtitle={tags.join(", ")} /> */}
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

export default CardItem;