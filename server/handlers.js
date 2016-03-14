const db = require('../db/connection')

module.exports = {
  getFolders(req, res) {
    // slow down response to mimic async
    setTimeout(() => {
      db.query(
        `SELECT * FROM folder WHERE operator = '${req.params.operator}'`,
        (err, rows) => {
          if (err) {
            console.error(`Internal Server error: ${err}`)
            res.status(500).send(err)
          }
          res.status(200).json(rows)
        }
      )
    }, 2000)
  },
}
