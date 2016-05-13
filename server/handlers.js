const db = require('../db/connection')

module.exports = {
  getFolders(req, res) {
    // slow down response to mimic async
    setTimeout(() => {
      db.query(
        `
          SELECT
            folder.test_number,
            customer.name
          FROM folder
          INNER JOIN customer
            ON customer_id = customer.id
          WHERE operator_id = (
            SELECT id
            FROM operator
            WHERE last_name = '${req.params.operator}'
          ) AND folder.date_completed IS NULL;
        `,
        (err, rows) => {
          if (err) {
            console.error(`Internal Server error: ${err}`)
            res.status(500).send(err)
          }
          res.status(200).json(rows)
        }
      )
    }, 500)
  },
}
