import React from 'react'

function RecentlyCompleted({ folders }) {
  return (
    <div>
      <h2>{'Recently Completed Folders'}</h2>
      <p>{folders}</p>
    </div>
  )
}
const { array } = React.PropTypes
RecentlyCompleted.propTypes = {
  folders: array,
}

export default RecentlyCompleted
