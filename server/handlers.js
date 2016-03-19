const db = require('../db/connection')

module.exports = {
  getFolders(req, res) {
    // slow down response to mimic async
    setTimeout(() => {
      db.query(
        `
          SELECT
            folder.test_number,
            folder.p_o_number,
            folder.number_of_tests,
            folder.date_started,
            folder.date_completed,
            customer.name,
            customer.contact_name,
            customer.contact_email,
            customer.contact_phone
          FROM folder
          INNER JOIN customer
            ON customer_id = customer.id
          WHERE operator = '${req.params.operator}';
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
