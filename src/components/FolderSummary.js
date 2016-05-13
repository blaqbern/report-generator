import React from 'react'
import { Link } from 'react-router'
import styles from './css/FolderSummary.css'

function FolderSummary({ folder }) {
  return (
    <div>
      <Link to={`report/folders/${folder.testNumber}`}>
        <span className={styles.heading}>{`${folder.testNumber}`}</span>
      </Link>
      <p>{`${folder.name}`}</p>
    </div>
  )
}
const { object } = React.PropTypes
FolderSummary.propTypes = { folder: object }

export default FolderSummary
