import React from 'react'

function RecentlyCompleted({ folders }) {
  return (
    <div>
      <h2>{'Recently Completed Folders'}</h2>
      <ul>
        {folders.map((folder, index) =>
          <li key={index}>{folder.test_number}</li>
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
