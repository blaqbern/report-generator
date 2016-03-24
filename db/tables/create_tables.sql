DROP DATABASE IF EXISTS tape_cal;
CREATE DATABASE tape_cal;

USE tape_cal;

CREATE TABLE customer (
  id INT AUTO_INCREMENT,
  name VARCHAR(80) NOT NULL,
  address_line_1 VARCHAR(80) NOT NULL,
  address_line_2 VARCHAR(80),
  city VARCHAR(30) NOT NULL,
  state VARCHAR(2) NOT NULL,
  zip VARCHAR(5) NOT NULL,
  contact_name VARCHAR(50) NOT NULL,
  contact_email VARCHAR(50) NOT NULL,
  contact_phone VARCHAR(10) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE operator (
  id INT AUTO_INCREMENT,
  first_name VARCHAR(10) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  pass VARCHAR(16) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE folder (
  test_number VARCHAR(9),
  customer_id INT NOT NULL,
  p_o_number VARCHAR(30) NOT NULL,
  number_of_tests INT NOT NULL,
  operator_id INT NOT NULL,
  date_started DATE NOT NULL,
  date_completed DATE,
  tests JSON,
  tape_ids JSON GENERATED ALWAYS AS (tests->'$[*].nistTapeId'),
  reports JSON,
  PRIMARY KEY (test_number),
  FOREIGN KEY (customer_id)
    REFERENCES customer(id)
    ON DELETE CASCADE,
  FOREIGN KEY (operator_id)
    REFERENCES operator(id)
    ON DELETE CASCADE
);

CREATE TABLE tape (
  nist_tape_id VARCHAR(6),
  customer_id INT NOT NULL,
  description VARCHAR(100) NOT NULL,
  previous_cal BOOLEAN NOT NULL,
  history JSON,
  PRIMARY KEY (nist_tape_id),
  FOREIGN KEY (customer_id)
    REFERENCES customer(id)
    ON DELETE CASCADE
);

CREATE TABLE folder_tapes (
  id INT NOT NULL AUTO_INCREMENT,
  test_number VARCHAR(9) NOT NULL,
  nist_tape_id VARCHAR(6) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (test_number)
    REFERENCES folder(test_number)
    ON DELETE CASCADE,
  FOREIGN KEY (nist_tape_id)
    REFERENCES tape(nist_tape_id)
    ON DELETE CASCADE
);
