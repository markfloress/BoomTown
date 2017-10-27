import * as firebase from 'firebase'

export default function (app){
  const config = {
    apiKey: "AIzaSyDXiCv9TB9VvY0tOqr6wy2p7SIuK35ojVM",
    authDomain: "fir-49812.firebaseapp.com",
    databaseURL: "https://fir-49812.firebaseio.com",
    projectId: "fir-49812",
    storageBucket: "fir-49812.appspot.com",
    messagingSenderId: "499694923001"
};
}

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch(login(user))
  } else {
    store.dispatch(logout())
  }
})






export const firebaseDB = firebase.database()

export const getUser = id => {
  return new Promise((resolve, reject) => {
    firebaseDB.ref(`/user/${id}`).once('value')
    .then((snapshot) => {
      resolve({
        ...snapshot.val(),
        id
      })
    })
    .catch(err => console.log(err)) 
  })
}