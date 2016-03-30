import React from 'react'

function WeatherPanel({
  airTempSensors,
  materialTempSensors,
  barometer,
  hygrometer,
}) {
  return (
    <div>
      <p>{'Air Temps'}</p>
      <ul>
        {airTempSensors.values.map((value, index) =>
          <li
            key={index}
            style={{ display: 'inline' }}
          >
            {`${value} ${airTempSensors.units} `}
          </li>
        )}
      </ul>
      <p>{'Material Temps'}</p>
      <ul>
        {materialTempSensors.values.map((value, index) =>
          <li
            key={index}
            style={{ display: 'inline' }}
          >
            {`${value} ${materialTempSensors.units} `}
          </li>
        )}
      </ul>
      <p>{`Pressure: ${barometer.value} ${barometer.units}`}</p>
      <p>{`Humidity: ${hygrometer.value} %`}</p>
    </div>
  )
}
const { object } = React.PropTypes
WeatherPanel.propTypes = {
  tempSensors: object,
  barometer: object,
  hygrometer: object,
}

export default WeatherPanel
