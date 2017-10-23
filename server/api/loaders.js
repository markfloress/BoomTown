import DataLoader from 'dataloader';
import { ownedItems, borrowedItems, getUser, getItem } from './jsonHelpers';


export default function() {
  return {
    userownedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => ownedItems(id))
    ))),


    userborrowedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => borrowedItems(id))
    ))),


    singleUser: new DataLoader(ids => (
      Promise.all(ids.map(id => getUser(id))
    ))),


    singleItem: new DataLoader(ids => (
      Promise.all(ids.map(id => getItem(id))
    ))),
  }
};



// import helper, add another key for helper and same idea