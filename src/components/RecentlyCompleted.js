import React from 'react'
import Folder from './Folder'

function RecentlyCompleted({ folders }) {
  return (
    <div>
      <h2>{'Recently Completed Folders'}</h2>
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
RecentlyCompleted.propTypes = {
  folders: array,
}

export default RecentlyCompleted
