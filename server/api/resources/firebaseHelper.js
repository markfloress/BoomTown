import * as firebase from "firebase";


// export default function(app) {

// }

// export const firebaseDB = firebase.database();

export const getUser = id => {
  return new Promise((resolve, reject) => {
    firebaseDB
      .ref(`/user/${id}`)
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
