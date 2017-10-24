module.exports = function(app) {
  
    app.set('PG_USER', process.env.PG_USER || 'postgreslesson')
    app.set('PG_PASS', process.env.PG_PASS || 'postgreslesson')
    app.set('PG_DATABASE', process.env.PG_DATABASE || 'postgreslesson')
    app.set('PG_HOST', process.env.PG_HOST || 'localhost')
  
  }