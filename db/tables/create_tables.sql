USE tape_cal;

CREATE TABLE customer (
  id INT NOT NULL AUTO_INCREMENT,
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

CREATE TABLE folder (
  test_number VARCHAR(9) NOT NULL,
  customer_id INT NOT NULL,
  p_o_number VARCHAR(30) NOT NULL,
  number_of_tests INT NOT NULL,
  operator VARCHAR(30) NOT NULL,
  date_started DATE NOT NULL,
  date_completed DATE,
  report TEXT,
  PRIMARY KEY (test_number),
  FOREIGN KEY (customer_id)
    REFERENCES customer(id)
    ON DELETE CASCADE
);
