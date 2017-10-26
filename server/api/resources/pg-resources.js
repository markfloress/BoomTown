const { Pool } = require('pg')

module.exports = function(app) {

  const pgClient = new Pool({
    host: app.get('PG_HOST'),
    user: app.get('PG_USER'),
    password: app.get('PG_PASS'),
    database: app.get('PG_DATABASE'),
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  })

  return pgClient
}







// getItems() {
//   app.get('/test', async (req, res) =>{
//     const time = await database.query('SELECT NOW() as now')
//     res.send(time.rows[0]).end()
//   })
//   // .then(response => response.json())
//   // .catch(errors => console.log(errors))
// }
