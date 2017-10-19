import fetch from 'node-fetch'

const resolvers = {
  Query: {        
    movies() {     
      return fetch(`http://localhost:40000`)
      .then(response => response.json())
      .catch(errors => console.log(errors));
    },

    movie(root, { id }) {         
      return fetch(`http://localhost:40000${id}`)     
      .then(response => response.json())
      .catch(errors => console.log(errors));
    },



    people() {
      return data.people
    },

    person(root, { id }) {
      return data.people.find(people => people.id === parseInt(id))
    },
  },





  Movie: {
    director(movie) {
      if (!movie.director) return null               // only if field is nullable or doesnt have " ! "
      return data.people.find(person => person.id === movie.director)
    },

    stars(movie) {
      return data.people.filter(person => (
        person.filmography.find(film => (
          film === movie.id && person.id !== movie.director
        ))
      ))


      // if (!movie.director) return null;                                     // for boomtown, itemowners to items
      // return fetch(`http://somemovieapi.com/people/${movie.director}`)
      //   .then(response => response.json())
      //   .catch(errors => console.log(errors));
    }
  },




  Person: {
    filmography(person) {
      return data.movies.filter(movie => (
        person.filmography.find(film => (
          film === movie.id
        ))
      ))
    }
  }
}

export default resolvers