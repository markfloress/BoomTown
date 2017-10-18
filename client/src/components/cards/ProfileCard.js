import React, {Component} from 'react';
import Gravatar from 'react-gravatar';
import './styles.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class ProfileCard extends Component {
  render() {
    const { bio, email } = this.props.data

    return (
      <Card className="profile-card">
        <CardHeader
          avatar={<Gravatar email={email} style={{ borderRadius: "50%"}}/>}
        />
        <CardTitle title={bio} subtitle='{tags.join(", ")}' />
      </Card>
    )
  }
}

export default ProfileCard;