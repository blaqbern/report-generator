import React from 'react'
import Folder from './Folder'

function FolderList({
  listName,
  folders,
}) {
  return (
    <div>
      <h2>{listName}</h2>
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
FolderList.propTypes = {
  folders: array,
}

export default FolderList
