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

  return {
    getItems() {
      return pgClient.query("select * from items")
      .then(response => response.rows)
      .catch(errors => console.log(errors))
    },

    getTags() {
      return pgClient.query("select * from tags")
      .then(response => response.rows)
      .catch(errors => console.log(errors))
    },
    
    getTag(itemID){
      return pgClient.query(`select tags.tagid, tags.title from tags join itemtags on tags.tagid = itemtags.tagid where itemtags.itemid = ${itemID}`)
      .then(resp => resp.rows)
    }
  }
}