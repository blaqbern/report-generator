import React from 'react'

function PendingFolders({ folders }) {
  return (
    <div>
      <h2>{'Pending Folders'}</h2>
      <p>{folders}</p>
    </div>
  )
}
const { object } = React.PropTypes
PendingFolders.propTypes = {
  folders: object,
}

export default PendingFolders
