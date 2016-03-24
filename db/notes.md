## database json fields

### folder.tests
```json
[
  {
    "nistTapeId": "16201",
    "lengthUnits": "feet",
    "tensionUnits": "pounds",
    "tension": 10,
    "zeroReference": 1,
    "testPoints": [15, 30, 45, 60, 75, 90, 100],
    "calculateAE": true,
    "calculateDensity": true,
    "plumbBobTape": true,
    "ae": {
      "aeTension": 20,
      "aeRightTerminalPoint": 1,
      "aeLefttTerminalPoint": 100
    },
    "density": {
      "leaderUnits": "inches"
    }
  },
  { "..." },
  { "..." }
]
```

### folder.reports
```json
[
  "/path/to/reports/folder/16201/21May2016.pdf",
  "/path/to/reports/folder/16202/22May2016.pdf",
  "/path/to/reports/folder/16203/24May2016.pdf"
]
```

### tape.history
```json
[
  {
    "date": "2016-01-01",
    "setupParams": { "..." },
    "results": { "..." }
  },
  {
    "date": "2014-01-01",
    "setupParams": { "..." },
    "results": { "..." }
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
        "aeTension": 20,
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
      "0 to 15": "14.9993",
      "0 to 30": "29.9993",
      "0 to 45": "44.9993",
      "0 to 60": "59.9993",
      "0 to 75": "74.9993",
      "0 to 90": "89.9993",
      "0 to 100": "99.9993",
      "plumb bob": "1.0007"
    }
  }
]
```
