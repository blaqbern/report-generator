USE tape_cal;

INSERT INTO customer (
  name,
  address_line_1,
  address_line_2,
  city,
  state,
  zip,
  contact_name,
  contact_email,
  contact_phone
) VALUES (
    'ACME Tape company',
    '123 Main St',
    'Building 101',
    'Oddsville',
    'MD',
    '20815',
    'Mike Miller',
    'mike@acme.com',
    '5551234567'
  ), (
    'Smith Metrology',
    '321 Creek Dr',
    NULL,
    'Parksville',
    'PA',
    '18778',
    'Frank Ford',
    'frank@smithMetrology.com',
    '5559876543'
  );

INSERT INTO folder VALUES
  (
    '998343-16',
    '1',
    'CREDITCARD',
    '2',
    'Blackburn',
    20151216,
    20160106,
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  ),
  (
    '998345-16',
    '1',
    '010023',
    '2',
    'Blackburn',
    20151218,
    20160109,
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  ),
  (
    '998346-16',
    '1',
    '120-03948',
    '1',
    'Blackburn',
    20160203,
    NULL,
    NULL
  ),
  (
    '998350-16',
    '1',
    '2133-FFLR-001',
    '4',
    'Blackburn',
    20160206,
    NULL,
    NULL
  ),
  (
    '998347-16',
    '2',
    '90909',
    '4',
    'Braine',
    20151126,
    NULL,
    NULL
  );
