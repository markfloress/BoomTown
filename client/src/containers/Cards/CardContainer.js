import React, {Component} from 'react';
import Gravatar from 'react-gravatar';
import Masonry from 'react-masonry-component';
import './styles.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {CardItem} from '../../components/cards'


class CardContainer extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const url = ['http://localhost:3001/items', 'http://localhost:3001/users'] 
    
    Promise.all(url.map(url => fetch(url).then(response => response.json())))
    .then(data => { 
      const [items, users] = data
      const itemWithUser = items.map((item) => {
        return {
          ...item,
          key: item.id,
          user: users.find(user => user.id === item.itemOwner),
        }
      })
      this.setState({data: itemWithUser})})
  }
  
  render () {

   return (
     <div className='cards-overview'>
      <Masonry>
       {this.state.data.map((item) => 
        <div key={item.id} className="singlecard-container">
          <CardItem data={item}/>
        </div>)}
      </Masonry>
    </div>

   )
 }
}

export default CardContainer;
