// import fetch from 'node-fetch'
// const url = 'http://localhost:3001/'

import { getItems, getItem, getUsers, getUser, ownedItems, borrowedItems, itemOwner, itemBorrower, createItem } from './jsonHelpers'

const resolvers = {
  Query: {
    items() {
      return getItems()
    },

    item(root, { id }, context) {
      // return getItem(id)
      return context.loaders.singleItem.load(id)
    },

    ///////

    users() {
      return getUsers()
    },

    user(root, { id }, context) {
      // return getUser(id)
      return context.loaders.singleUser.load(id)
    },
  },


  ///////////////////////


  User: {
    items(user, args, context) {
      if (!user.id) return null
      // return ownedItems(user.id)
      return context.loaders.userownedItems.load(user.id)
    },

    borroweditems(user, args, context) {
      if (!user.id) return null      
      // return borrowedItems(user.id)
      return context.loaders.userborrowedItems.load(user.id)
    }
  },


  /////////////////////////


  Item: {
    itemowner(item) {
      if (!item.itemowner) return null      
      return itemOwner(item)
    },

    borrower(item) {
      if (!item.borrower) return null      
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