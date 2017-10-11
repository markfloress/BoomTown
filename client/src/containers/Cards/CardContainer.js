import React, {Component} from 'react';
import Gravatar from 'react-gravatar';
import Masonry from 'react-masonry-component';
import './styles.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';



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
          available: item.available,
          borrower: item.borrower,
          createdOn: item.createdOn,
          description: item.description,
          key: item.id,
          imageUrl: item.imageUrl,
          tags: item.tags,
          title: item.title,
          user: users.find(user => user.id === item.itemOwner),
        }
      })


      let List = itemWithUser.map((item) => {
        return(
          <Masonry
          
          >

            <Card className="single-card">
              <CardMedia 
                overlay={ !item.available && <CardTitle subtitle="Unavailable" style={{ textTransform: "uppercase" }}/>}
              >
                <img src={item.imageUrl} alt="Item Image" />
              </CardMedia>
              <CardHeader
                title={item.user.fullName}
                subtitle="{users.fullName}"
                avatar={<Gravatar email={item.user.email} style={{ borderRadius: "50%"}}/>}
              />
              <CardTitle title={item.title} subtitle={item.tags.join(", ")} />
              <CardText>
                {item.description} 
              </CardText>
              <CardActions>
                {!item.borrower && <RaisedButton label="Borrow" 
                primary buttonStyle={{ backgroundColor: 'gray' }} 
                labelStyle={{ textTransform: "uppercase" }}/>}
              </CardActions>
            </Card>
          </Masonry>
        )
      })
      this.setState({data: List})})
  }




  render () {

   return (
     <div className='card-container'>
       {this.state.data}
    </div>
   )
 }
}

export default CardContainer;
