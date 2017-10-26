import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import initConfigs from './configs'
import initPostgres from './api/resources/pg-resources'

import schema from './api/schema'
import cors from 'cors'
import createLoaders from './api/loaders'


const app = express()
const GQL_PORT = process.env.PORT

initConfigs(app)

const database = initPostgres(app)

app.use('*', cors());

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { loaders: createLoaders() } }))

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.get('/time', async (req, res) => {
  const time = await database.query('select * from tags')
  res.send(time).end()
})

app.listen(GQL_PORT, () => {
  console.log(`GraphQL server is running on port ${GQL_PORT}`)
  //    https://localhost:${GQL_PORT}/graphql
})