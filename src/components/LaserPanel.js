import React from 'react'
import DigitalReadout from '../components/DigitalReadout'

function LaserPanel({
  laser,
  handleZeroLaserClick,
  handleTakeMeasurementClick,
}) {
  return (
    <div>
      <DigitalReadout reading={laser.value} />
      <button
        onClick={handleZeroLaserClick}
      >
        {'Zero Laser'}
      </button>
      <button
        onClick={handleTakeMeasurementClick}
      >
        {'Record'}
      </button>
    </div>
  )
}
const { object } = React.PropTypes
LaserPanel.propTypes = { laser: object }
export default LaserPanel
