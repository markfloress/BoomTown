// import fetch from 'node-fetch'
// const url = 'http://localhost:3001/'

import { getItems, getItem, getUsers, getUser, ownedItems, borrowedItems, itemOwner, itemBorrower, createItem } from './jsonHelpers'

const resolvers = {
  Query: {
    items() {
      return getItems()
    },

    item(root, { id }) {
      return getItem(id)
    },

    ///////

    users() {
      return getUsers()
    },

    user(root, { id }) {
      return getUser(id)      
    },
  },


  ///////////////////////


  User: {
    items(user) {
      if (!user.id) return null
      return ownedItems(user.id)
    },

    borroweditems(user) {
      if (!user.id) return null      
      return borrowedItems(user.id)
    }
  },


  /////////////////////////


  Item: {
    itemowner(item) {
      return itemOwner(item)
    },

    borrower(item) {
      return itemBorrower(item)
    }
  },

  Mutation: {
    addItem(root, {title, description, imageurl, tags, itemowner}) {
      return createItem(title, description, imageurl, tags, itemowner)
    }
  }
}

export default resolvers