import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `

  type Items {
    id: ID!
    title: String!
    description: String
    imageurl: String
    tags: [""]
    itemowner: Users!
    created: String!
    available: Boolean!
    borrower: User
  }

  type Users {
    id: ID!
    email: String!
    fullname: String!
    bio: String
    items: [Items]
    borroweditems: [Items]
  }





  type Query {
    items: [Items]
    item(id: ID!): Items
    users: [Users]
    user(id: ID!): Users
  }

`

export default makeExecutableSchema({
  typeDefs,
  resolvers
})