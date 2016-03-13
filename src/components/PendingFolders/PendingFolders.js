import React from 'react'

function PendingFolders({ folders }) {
  return (
    <div>
      <h2>{'Pending Folders'}</h2>
      <ul>
        {folders.map((folder, index) =>
          <li key={index}>{folder.test_number}</li>
        )}
      </ul>
    </div>
  )
}
const { array } = React.PropTypes
PendingFolders.propTypes = {
  folders: array,
}

export default PendingFolders
