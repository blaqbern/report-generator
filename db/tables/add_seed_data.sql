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
)
VALUES (
  'ACME Tape company',
  '123 Main St',
  'Building 101',
  'Oddsville',
  'MD',
  '20815',
  'Mike Miller',
  'mike@acme.com',
  '5551234567'
),
(
  'Smith Metrology',
  '321 Creek Dr',
  NULL,
  'Parksville',
  'PA',
  '18778',
  'Frank Ford',
  'frank@smithMetrology.com',
  '5559876543'
),
(
  'Aspen Equipment',
  '9870 Old Main St',
  NULL,
  'Aspen',
  'CO',
  '82309',
  'Jimmy John',
  'jj@aspenequip.com',
  '5553451234'
);

INSERT INTO operator (
  first_name,
  last_name,
  pass
)
VALUES (
  'Chris',
  'Blackburn',
  'chrisPass'
),
(
  'Mike',
  'Braine',
  'mikePass'
);

INSERT INTO folder (
  test_number,
  customer_id,
  p_o_number,
  number_of_tests,
  operator_id,
  date_started,
  date_completed,
  tests,
  reports
)
VALUES (
  '998343-16',
  '3',
  'CREDITCARD',
  '2',
  '1',
  20151216,
  20160106,
  '
    [
      {
        "nistTapeId": "16201",
        "lengthUnits": "feet",
        "tensionUnits": "pounds",
        "tension": 20,
        "zeroReference": 0,
        "testPoints": [200, 400, 600, 800, 1000, 1200, 1400, 1600],
        "calculateAE": true,
        "calculateDensity": false,
        "plumbBobTape": false,
        "ae": {
          "aeTension": 40,
          "aeRightTerminalPoint": 0,
          "aeLefttTerminalPoint": 200
        }
      },
      {
        "nistTapeId": "16202M",
        "lengthUnits": "m",
        "tensionUnits": "kg",
        "tension": 5,
        "zeroReference": 0,
        "testPoints": [5, 10, 15, 20, 25, 30],
        "calculateAE": true,
        "calculateDensity": true,
        "plumbBobTape": false,
        "ae": {
          "aeTension": 10,
          "aeRightTerminalPoint": 0,
          "aeLefttTerminalPoint": 30
        },
        "density": {
          "leaderUnits": "mm"
        }
      }
    ]
  ',
  '
    [
      "path/to/reports/folder/16201/3Mar2016.pdf",
      "path/to/reports/folder/16202M/4Mar2016.pdf"
    ]
  '
),
(
  '998345-16',
  '2',
  '010023',
  '1',
  '1',
  20151218,
  20160109,
  '
    [
      {
        "nistTapeId": "13001",
        "lengthUnits": "feet",
        "tensionUnits": "pounds",
        "tension": 10,
        "zeroReference": 1,
        "testPoints": [15, 30, 45, 60, 75, 90, 100],
        "calculateAE": true,
        "calculateDensity": true,
        "plumbBobTape": true,
        "ae": {
          "aeTension": 30,
          "aeRightTerminalPoint": 1,
          "aeLefttTerminalPoint": 100
        },
        "density": {
          "leaderUnits": "inches"
        }
      }
    ]
  ',
  '
    ["path/to/reports/folder/13001/1Jan2016.pdf"]
  '
),
(
  '998346-16',
  '3',
  '120-03948',
  '1',
  '1',
  20160203,
  NULL,
  NULL,
  NULL
),
(
  '998350-16',
  '1',
  '2133-FFLR-001',
  '4',
  '1',
  20160206,
  NULL,
  NULL,
  NULL
),
(
  '998347-16',
  '2',
  '90909',
  '4',
  '2',
  20151126,
  NULL,
  NULL,
  NULL
);

INSERT INTO tape VALUES (
  '13001',
  1,
  '100 foot plub bob tape',
  true,
  '
    [
      {
        "date": "2016-01-01",
        "setupParams": {
          "lengthUnits": "feet",
          "tensionUnits": "pounds",
          "tension": 10,
          "zeroReference": 1,
          "testPoints": [15, 30, 45, 60, 75, 90, 100],
          "calculateAE": true,
          "calculateDensity": true,
          "plumbBobTape": true,
          "ae": {
            "aeTension": 30,
            "aeRightTerminalPoint": 1,
            "aeLefttTerminalPoint": 100
          },
          "density": {
            "leaderUnits": "inches",
            "leaderLength": 12.3,
            "trailerLength": 5.5
          }
        },
        "results": {
          "1 to 15": 14.9993,
          "1 to 30": 29.9993,
          "1 to 45": 44.9993,
          "1 to 60": 59.9993,
          "1 to 75": 74.9993,
          "1 to 90": 89.9993,
          "1 to 100": 99.9993,
          "plumb bob": 1.0007
        }
      },
      {
        "date": "2014-01-01",
        "setupParams": {
          "lengthUnits": "feet",
          "tensionUnits": "pounds",
          "tension": 10,
          "zeroReference": 1,
          "testPoints": [15, 30, 45, 60, 75, 90, 100],
          "calculateAE": true,
          "calculateDensity": true,
          "plumbBobTape": true,
          "ae": {
            "aeTension": 30,
            "aeRightTerminalPoint": 1,
            "aeLefttTerminalPoint": 100
          },
          "density": {
            "leaderUnits": "inches",
            "leaderLength": 12.3,
            "trailerLength": 5.5
          }
        },
        "results": {
          "1 to 15": 14.9993,
          "1 to 30": 29.9993,
          "1 to 45": 44.9993,
          "1 to 60": 59.9993,
          "1 to 75": 74.9993,
          "1 to 90": 89.9993,
          "1 to 100": 99.9993,
          "plumb bob": 1.0007
        }
      },
      {
        "date": "2012-01-01",
        "setupParams": {
          "lengthUnits": "feet",
          "tensionUnits": "pounds",
          "tension": 10,
          "zeroReference": 1,
          "testPoints": [15, 30, 45, 60, 75, 90, 100],
          "calculateAE": true,
          "calculateDensity": true,
          "plumbBobTape": true,
          "ae": {
            "aeTension": 30,
            "aeRightTerminalPoint": 1,
            "aeLefttTerminalPoint": 100
          },
          "density": {
            "leaderUnits": "inches",
            "leaderLength": 12.3,
            "trailerLength": 5.5
          }
        },
        "results": {
          "1 to 15": 14.9993,
          "1 to 30": 29.9993,
          "1 to 45": 44.9993,
          "1 to 60": 59.9993,
          "1 to 75": 74.9993,
          "1 to 90": 89.9993,
          "1 to 100": 99.9993,
          "plumb bob": 1.0007
        }
      },
      {
        "date": "2010-01-01",
        "setupParams": {
          "lengthUnits": "feet",
          "tensionUnits": "pounds",
          "tension": 10,
          "zeroReference": 1,
          "testPoints": [15, 30, 45, 60, 75, 90, 100],
          "calculateAE": true,
          "calculateDensity": true,
          "plumbBobTape": true,
          "ae": {
            "aeTension": 30,
            "aeRightTerminalPoint": 1,
            "aeLefttTerminalPoint": 100
          },
          "density": {
            "leaderUnits": "inches",
            "leaderLength": 12.3,
            "trailerLength": 5.5
          }
        },
        "results": {
          "1 to 15": 14.9993,
          "1 to 30": 29.9993,
          "1 to 45": 44.9993,
          "1 to 60": 59.9993,
          "1 to 75": 74.9993,
          "1 to 90": 89.9993,
          "1 to 100": 99.9993,
          "plumb bob": 1.0007
        }
      }
    ]
  '
),
(
  '14332',
  1,
  '100 foot steel tape',
  true,
  '
    [
      {
        "date": "2016-02-02",
        "setupParams": {
          "lengthUnits": "feet",
          "tensionUnits": "pounds",
          "tension": 10,
          "zeroReference": 0,
          "testPoints": [15, 30, 45, 60, 75, 90, 100],
          "calculateAE": true,
          "calculateDensity": true,
          "plumbBobTape": false,
          "ae": {
            "aeTension": 30,
            "aeRightTerminalPoint": 0,
            "aeLefttTerminalPoint": 100
          },
          "density": {
            "leaderUnits": "inches",
            "leaderLength": 24.3,
            "trailerLength": 10.5
          }
        },
        "results": {
          "0 to 15": 15.0016,
          "0 to 30": 30.0016,
          "0 to 45": 45.0016,
          "0 to 60": 60.0016,
          "0 to 75": 75.0016,
          "0 to 90": 90.0016,
          "0 to 100": 100.0016
        }
      },
      {
        "date": "2014-02-02",
        "setupParams": {
          "lengthUnits": "feet",
          "tensionUnits": "pounds",
          "tension": 10,
          "zeroReference": 0,
          "testPoints": [15, 30, 45, 60, 75, 90, 100],
          "calculateAE": true,
          "calculateDensity": true,
          "plumbBobTape": true,
          "ae": {
            "aeTension": 30,
            "aeRightTerminalPoint": 0,
            "aeLefttTerminalPoint": 100
          },
          "density": {
            "leaderUnits": "inches",
            "leaderLength": 24.3,
            "trailerLength": 10.5
          }
        },
        "results": {
          "0 to 15": 15.0016,
          "0 to 30": 30.0016,
          "0 to 45": 45.0016,
          "0 to 60": 60.0016,
          "0 to 75": 75.0016,
          "0 to 90": 90.0016,
          "0 to 100": 100.0016
        }
      },
      {
        "date": "2012-02-02",
        "setupParams": {
          "lengthUnits": "feet",
          "tensionUnits": "pounds",
          "tension": 10,
          "zeroReference": 0,
          "testPoints": [15, 30, 45, 60, 75, 90, 100],
          "calculateAE": true,
          "calculateDensity": true,
          "plumbBobTape": true,
          "ae": {
            "aeTension": 30,
            "aeRightTerminalPoint": 0,
            "aeLefttTerminalPoint": 100
          },
          "density": {
            "leaderUnits": "inches",
            "leaderLength": 24.3,
            "trailerLength": 10.5
          }
        },
        "results": {
          "0 to 15": 15.0016,
          "0 to 30": 30.0016,
          "0 to 45": 45.0016,
          "0 to 60": 60.0016,
          "0 to 75": 75.0016,
          "0 to 90": 90.0016,
          "0 to 100": 100.0016
        }
      }
    ]
  '
),
(
  '16201',
  2,
  '1600 foot steel tape',
  true,
  '
    [
      {
        "date": "2016-03-03",
        "setupParams": {
          "lengthUnits": "feet",
          "tensionUnits": "pounds",
          "tension": 20,
          "zeroReference": 0,
          "testPoints": [200, 400, 600, 800, 1000, 1200, 1400, 1600],
          "calculateAE": true,
          "calculateDensity": false,
          "plumbBobTape": false,
          "ae": {
            "aeTension": 40,
            "aeRightTerminalPoint": 0,
            "aeLefttTerminalPoint": 200
          }
        },
        "results": {
          "0 to 200": 199.9999,
          "0 to 400": 399.9999,
          "0 to 600": 599.9999,
          "0 to 800": 799.9999,
          "0 to 1000": 999.9999,
          "0 to 1200": 1199.9999,
          "0 to 1400": 1399.9999,
          "0 to 1600": 1599.9999
        }
      }
    ]
  '
),
(
  '16202M',
  2,
  '30 m steel tape',
  true,
  '
    [
      {
        "date": "2016-03-04",
        "setupParams": {
          "lengthUnits": "m",
          "tensionUnits": "kg",
          "tension": 5,
          "zeroReference": 0,
          "testPoints": [5, 10, 15, 20, 25, 30],
          "calculateAE": true,
          "calculateDensity": true,
          "plumbBobTape": false,
          "ae": {
            "aeTension": 10,
            "aeRightTerminalPoint": 0,
            "aeLefttTerminalPoint": 30
          },
          "density": {
            "leaderUnits": "mm",
            "leaderLength": 104,
            "trailerLength": 568
          }
        },
        "results": {
          "0 to 5": 4.99987,
          "0 to 10": 9.99998,
          "0 to 15": 14.99998,
          "0 to 20": 20.00005,
          "0 to 25": 24.00009,
          "0 to 30": 30.00012
        }
      }
    ]
  '
),
(
  '16043',
  2,
  '36 inch steel ruler',
  true,
  '
    [
      {
        "date": "2015-04-05",
        "setupParams": {
          "lengthUnits": "inches",
          "tensionUnits": "pounds",
          "tension": 0,
          "zeroReference": 0,
          "testPoints": [1, 6, 12, 18, 24, 30, 36],
          "calculateAE": false,
          "calculateDensity": true,
          "plumbBobTape": false,
          "density": {
            "leaderUnits": "inches",
            "leaderLength": 0,
            "trailerLength": 0
          }
        },
        "results": {
          "0 to 1": 1.004,
          "0 to 6": 5.999,
          "0 to 12": 12.001,
          "0 to 18": 18.001,
          "0 to 24": 24.003,
          "0 to 30": 30.003,
          "0 to 36": 36.004
        }
      },
      {
        "date": "2010-04-05",
        "setupParams": {
          "lengthUnits": "inches",
          "tensionUnits": "pounds",
          "tension": 0,
          "zeroReference": 0,
          "testPoints": [1, 6, 12, 18, 24, 30, 36],
          "calculateAE": false,
          "calculateDensity": true,
          "plumbBobTape": false,
          "density": {
            "leaderUnits": "inches",
            "leaderLength": 0,
            "trailerLength": 0
          }
        },
        "results": {
          "0 to 1": 1.004,
          "0 to 6": 5.999,
          "0 to 12": 12.001,
          "0 to 18": 18.001,
          "0 to 24": 24.003,
          "0 to 30": 30.003,
          "0 to 36": 36.004
        }
      }
    ]
  '
);

INSERT INTO folder_tapes (
  test_number,
  nist_tape_id
)
VALUES (
  '998343-16',
  '16201'
),
(
  '998343-16',
  '16202M'
),
(
  '998345-16',
  '13001'
);
