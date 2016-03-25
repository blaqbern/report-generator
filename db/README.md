# MySQL Database Implementation

The `db` directory exists really just to document the database [schema](https://github.com/blaqbern/report-generator/tree/master/db/tables/create_tables.sql)
 for the project, and to allow others to easily create an identical database to play around with so they can get a feel for how the project data is structured.

## Recreate the project database locally

If you don't already have MySQL installed on your computer, you'll need to do that first. Go to the [MySQL downloads](https://dev.mysql.com/downloads) page and download your preferred package. You'll also need to setup a MySQL root user with all privileges.

If you also have [Node](https://nodejs.org) installed, you can use the npm scripts I've written to setup the database, but this is not required (see "Using the Command Line" below).

> NOTE: Node and npm *are* required to run the project itself, but they are not required if you just want to setup the database

#### Using npm scripts

Navigate to the directory where you've cloned the project and type `npm run create-db`. If you also want to add some dummy data, you can type `npm run populate-db`. You'll be asked for your MySQL root password each time. For convenience, you can combine the two steps above by typing `npm run setup-db` (you'll still need to type your password twice).

```sh
$ git clone https://github.com/blaqbern/report-generator.git
$ cd report-generator
$ npm run setup-db
```

#### Using the Command Line

If you'd rather not install Node, you can still create the database using the command line, by running the following commands in the project directory:

```sh
$ git clone https://github.com/blaqbern/report-generator.git
$ cd report-generator
$ mysql -u root -p < db/tables/create_tables.sql
$ mysql -u root -p < db/tables/add_seed_data.sql
```

...or you can run both with a single command:

```sh
$ mysql -u root -p < db/tables/create_tables.sql < db/tables/add_seed_data.sql
```

### JSON fields
There are a few  fields that I felt were appropriate for MySQL's native JSON data type. These are the `tests` and `reports` fields of the `folder` table, and the `history` field of the `tape` table. All of these fields are variable-length arrays, making them good candidates for the JSON data type. [View the schema for these fields](https://github.com/blaqbern/report-generator/tree/master/db/tables/json-fields.md).
