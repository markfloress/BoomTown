import React, {Component} from 'react';
import './styles.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton'



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
          // splitTags: tags.split(", ")
        }
      })


      let List = itemWithUser.map((item, x) => {
        return(
            <Card className='single-card'>
              <CardMedia 
                overlay={ !item.available ? null : <CardTitle subtitle="Unavailable" style={{ textTransform: "uppercase" }}/>}
              >
                <img src={item.imageUrl} alt="Item Image" />
              </CardMedia>
              <CardHeader
                title={item.user.fullName}
                subtitle="{users.fullName}"
                avatar= ""
              />
              <CardTitle title={item.title} subtitle={item.tags} />
              <CardText>
                {item.description} 
              </CardText>
              <CardActions>
                {!item.borrower ? null : <RaisedButton label="Borrow" 
                primary buttonStyle={{ backgroundColor: 'gray' }} 
                labelStyle={{ textTransform: "uppercase" }}/>}
              </CardActions>
            </Card>
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
