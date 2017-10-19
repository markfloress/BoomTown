import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `

  type Item {
    id: ID!
    title: String!
    description: String
    imageurl: String
    tags: [String]
    itemowner: User!
    created: String!
    available: Boolean!
    borrower: User
  }

  type User {
    id: ID!
    email: String!
    fullname: String!
    bio: String
    items: [Item]
    borroweditems: [Item]
  }





  type Query {
    items: [Item]
    item(id: ID!): Item
    users: [User]
    user(id: ID!): User
  }

`

export default makeExecutableSchema({
  typeDefs,
  resolvers
})