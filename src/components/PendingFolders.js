import React from 'react'
import Folder from './Folder'

function PendingFolders({ folders }) {
  return (
    <div>
      <h2>{'Pending Folders'}</h2>
      <ul>
        {folders.map((folder, index) =>
          <li key={index}>
            <Folder folder={folder} />
          </li>
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
