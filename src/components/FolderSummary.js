import React from 'react'

function FolderSummary({ folder }) {
  return (
    <div>
      <span>{`${folder.testNumber}`}</span>
      {' '}
      <span>{`${folder.numberOfTests} tapes`}</span>
      <p>{`${folder.name}`}</p>
    </div>
  )
}
const { object } = React.PropTypes
FolderSummary.propTypes = { folder: object }

export default FolderSummary
