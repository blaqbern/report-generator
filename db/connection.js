const mysql = require('mysql')

module.exports = mysql.createConnection({
  host: 'localhost',
  user: 'bern',
  password: 'secret',
  database: 'tape_cal',
})
