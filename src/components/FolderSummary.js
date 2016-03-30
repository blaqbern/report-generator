import React from 'react'
import { Link } from 'react-router'

function FolderSummary({ folder }) {
  return (
    <div>
      <Link to={`report/folders/${folder.testNumber}`}>
        <span>{`${folder.testNumber}`}</span>
      </Link>
      {' '}
      <span>{`${folder.numberOfTests} tapes`}</span>
      <p>{`${folder.name}`}</p>
    </div>
  )
}
const { object } = React.PropTypes
FolderSummary.propTypes = { folder: object }

export default FolderSummary
