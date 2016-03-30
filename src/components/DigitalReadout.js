import React from 'react'

function DigitalReadout({ reading }) {
  return (
    <div>{JSON.stringify(reading) || 'Error'}</div>
  )
}
const { number } = React.PropTypes
DigitalReadout.propTypes = { reading: number }

export default DigitalReadout
