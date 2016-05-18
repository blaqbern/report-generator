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
  getFolder(req, res) {
    setTimeout(() => {
      db.query(
        `
          SELECT
            folder.p_o_number,
            folder.number_of_tests,
            folder.date_started,
            folder.date_completed,
            folder.tests,
            folder.reports,
            customer.name,
            customer.address_line_1,
            customer.address_line_2,
            customer.city,
            customer.state,
            customer.zip,
            customer.contact_name,
            customer.contact_email,
            customer.contact_phone
          FROM folder
          INNER JOIN customer
            ON folder.customer_id = customer.id
          WHERE folder.test_number = '${req.params.testNumber}';
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
