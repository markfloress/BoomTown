import React, {Component} from 'react';
import Gravatar from 'react-gravatar';
import './styles.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class ProfileCard extends Component {
  render() {
    const {available, borrower, createdOn, description, key, imageUrl, tags, title, user} = this.props.data

    return (
      <Card className="profile-card">
        <CardHeader
          avatar={<Gravatar email={user.email} style={{ borderRadius: "50%"}}/>}
        />
        <CardTitle title={title} subtitle={tags.join(", ")} />
      </Card>
    )
  }
}

export default ProfileCard;