import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

import schema from './api/schema'
import cors from 'cors';
import createLoaders from './api/loaders'


const app = express()
const GQL_PORT = 40000

app.use('*', cors());

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { loaders: createLoaders() } }))

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(GQL_PORT, () => {
  console.log(`GraphQL server is running on port ${GQL_PORT}`)
  //    https://localhost:${GQL_PORT}/graphql
})

