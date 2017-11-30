import * as firebase from "firebase";


// export default function(app) {

// }

const config = {
  apiKey: "AIzaSyAxOWpW1i9TL6DMFtGCUy12DKmFl-ffDsQ",
  authDomain: "boomtown-491c3.firebaseapp.com",
  databaseURL: "https://boomtown-491c3.firebaseio.com",
  projectId: "boomtown-491c3",
  storageBucket: "boomtown-491c3.appspot.com",
  messagingSenderId: "203089060458"
};
firebase.initializeApp(config);

export const firebaseDB = firebase.database();

export const getUser = id => {
  return new Promise((resolve, reject) => {
    firebaseDB
      .ref(`/users/${id}`)
      .once("value")
      .then(snapshot => {
        resolve({
          ...snapshot.val(),
          id
        });
      })
      .catch(err => console.log(err));
  });
};
