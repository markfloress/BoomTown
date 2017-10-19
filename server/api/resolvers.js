import fetch from 'node-fetch'

const url = 'http://localhost:3001/'

const resolvers = {
  Query: {        
    items() {     
      return fetch(`${url}items`)
      .then(response => response.json())
      .catch(errors => console.log(errors));
    },

    item(root, { id }) {         
      return fetch(`${url}items/${id}`)     
      .then(response => response.json())
      .catch(errors => console.log(errors));
    },


///////


    users() {
      return fetch(`${url}users`)
      .then(response => response.json())
      .catch(errors => console.log(errors));
    },

    user(root, { id }) {
      return fetch(`${url}users/${id}`)     
      .then(response => response.json())
      .catch(errors => console.log(errors));
    },
  },


///////////////////////


  User: {
    async items(users) {
      const response = await fetch(`${url}items/?itemowner=${user.id}`)
      const itemown = await response.json()
      return itemown
    },

    async borroweditems(users) {
      const response = await fetch(`${url}items/?borrower=${user.id}`)
      const borrowed = await response.json()
      return borrowed
    }
  },


/////////////////////////


  Item: {
    itemowner(item) { 
      return fetch(`${url}users/${item.itemowner}`)
        .then(response => response.json())
        .catch(errors => console.log(errors)); 
    },

    borrower(item) {
      if (!item.borrower) return null;   
        return fetch(`${url}users/${item.borrower}`)
        .then(response => response.json())
        .catch(errors => console.log(errors)); 
    }
  }
}

export default resolvers