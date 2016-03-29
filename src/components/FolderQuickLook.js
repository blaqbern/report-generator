import React from 'react'

function FolderQuickLook({
  details,
}) {
  return (
    <div>
      <p>{`Customer: ${details.name}`}</p>
      <p>{`${details.numberOfTests} tapes`}</p>
    </div>
  )
}

export default FolderQuickLook
