# MySQL Database Implementation

This folder really exists only to document the database [schema](https://github.com/blaqbern/report-generator/tree/master/db/tables/create_tables.sql)
 for the project, and to allow others to easily create an identical database to play around with so they might understand something about the way the data for the project is structured.

## Recreate the project database locally
If you don't already have MySQL installed on your computer, you'll need to do that first. Go to the [MySQL downloads](https://dev.mysql.com/downloads) page and download your preferred package. You'll also need to setup a MySQL root user with all privileges.

Navigate to the directory where you've cloned the project and type `npm run create-db`. If you also want to add some dummy data, you can type `npm run populate-db`. You'll be asked for your MySQL root password each time. For convenience, you can combine the two steps above by typing `npm run setup-db` (you'll still need to type your password twice).

```sh
$ cd path/to/report-generator
$ npm run setup-db
```

### JSON fields
There are a couple of fields that I felt were appropriate for MySQL's native JSON data type. These are the `tests` and `reports` fields of the `folder` table, and the `history` field of the `tape` table. Each of these fields is a variable-length array, making them good candidates for the JSON data type. [View the schema for these fields](https://github.com/blaqbern/report-generator/tree/master/db/tables/json-fields.md).
