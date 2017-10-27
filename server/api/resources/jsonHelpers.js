import fetch from 'node-fetch'

const url = 'http://localhost:3001/'



//// Root Helpers

// export const getItems = () => {
//   return fetch(`${url}items`)
//   .then(response => response.json())
//   .catch(errors => console.log(errors))
// }

export const getItem = (id) => {
  return fetch(`${url}items/${id}`)
  .then(response => response.json())
  .catch(errors => console.log(errors))
}

export const getUsers = () => {
  return fetch(`${url}users`)
  .then(response => response.json())
  .catch(errors => console.log(errors))
}

export const getUser = (id) => {
  return fetch(`${url}users/${id}`)
  .then(response => response.json())
  .catch(errors => console.log(errors))
}


///// User Helpers

export const ownedItems = async (id) => {
  const response = await fetch(`${url}items/?itemowner=${id}`)
  const itemown = await response.json()
  return itemown
}

export const borrowedItems = async (id) => {
  const response = await fetch(`${url}items/?borrower=${id}`)
  const borrowed = await response.json()
  return borrowed
}



///// Item Helpers

export const itemOwner = (item) => {
  return fetch(`${url}users/${item.itemowner}`)
    .then(response => response.json())
    .catch(errors => console.log(errors))
}

export const itemBorrower = (item) => {
  return fetch(`${url}users/${item.borrower}`)
    .then(response => response.json())
    .catch(errors => console.log(errors))
}



//// Mutation Helper 

export const createItem = (title, description, imageurl, tags, itemowner, created, available, borrower) => {
  const tzOffset = (new Date()).getTimezoneOffset() * 60000; // offset in milliseconds
  const localTime = `${(new Date(Date.now() - tzOffset)).toISOString().slice(0, -1).replace('T', ' ')}-07`

  const newItem = {
    title,
    description,
    imageurl,
    tags,
    itemowner,
    created: localTime,
    available: true,
    borrower: null
  }

  return fetch(`${url}items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newItem)
    })
    .then(response => { return response.json()})
    .catch(error => {
      console.log('something wrong with posting item', error)
    })
}