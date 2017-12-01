import React, {Component} from 'react';
import Gravatar from 'react-gravatar';
import './styles.css';
import {Card, CardHeader, CardTitle} from 'material-ui/Card';

class ProfileCard extends Component {
  render() {
    const { fullname, bio, email, items, borroweditems } = this.props.data

    const ownedItemCount = items.length
    const borrowedItemCount = borroweditems.length

    console.log('counters', ownedItemCount, borrowedItemCount)

    return (
      <Card className="profile-card">
        <div className='profCard-header'>
          <CardHeader avatar={<Gravatar email={email} style={{ borderRadius: "50%", width: '90%', height: '90%' }}/>} style={{ marginLeft: '30px'  }}/>
        </div>
        <div className='profCard-counter'>
          <CardTitle title={fullname} subtitle={bio}/>          
          <p>items owned: <span>{ownedItemCount}</span></p>
          <p>items borrowed: <span>{borrowedItemCount}</span></p>
        </div>
      </Card>
    )
  }
}

export default ProfileCard;