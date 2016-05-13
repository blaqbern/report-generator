import React from 'react'
import FolderSummary from './FolderSummary'

function Folders({
  listName,
  folders,
}) {
  return (
    <div>
      <h2>{listName}</h2>
      <ul>
        {folders.map((folder, index) =>
          <li key={index}>
            <FolderSummary folder={folder} />
          </li>
        )}
      </ul>
    </div>
  )
}
const { array } = React.PropTypes
Folders.propTypes = {
  folders: array,
}

export default Folders
