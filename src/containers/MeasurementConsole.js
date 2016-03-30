import React from 'react'
import { connect } from 'react-redux'
import { zeroLaser, takeMeasurement } from '../redux/modules/instrumentation'
import LaserPanel from '../components/LaserPanel'
import WeatherPanel from '../components/WeatherPanel'

function MeasurementConsole({
  instrumentation,
  handleZeroLaserClick,
  handleTakeMeasurementClick,
}) {
  return (
    <div>
      <LaserPanel
        laser={instrumentation.data.laser}
        handleZeroLaserClick={handleZeroLaserClick}
        handleTakeMeasurementClick={handleTakeMeasurementClick}
      />
      <WeatherPanel
        airTempSensors={instrumentation.data.airTempSensors}
        materialTempSensors={instrumentation.data.materialTempSensors}
        barometer={instrumentation.data.barometer}
        hygrometer={instrumentation.data.hygrometer}
      />
    </div>
  )
}
const { object } = React.PropTypes
MeasurementConsole.propTypes = {
  laser: object,
  tempSensors: object,
  barometer: object,
  hygrometer: object,
}

function mapStateToProps(state) {
  return { instrumentation: state.instrumentation }
}

function mapDispatchToProps(dispatch) {
  return {
    handleZeroLaserClick: () =>
      dispatch(zeroLaser()),
    handleTakeMeasurementClick: () =>
      dispatch(takeMeasurement()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MeasurementConsole)
