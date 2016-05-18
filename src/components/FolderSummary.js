import React from 'react'
import { Link } from 'react-router'
import styles from './css/FolderSummary.css'

function FolderSummary({ folder }) {
  return (
    <div>
      <Link to={`report/folders/${folder.fields.testNumber}`}>
        <span className={styles.heading}>{`${folder.fields.testNumber}`}</span>
      </Link>
      <p>{`${folder.fields.name}`}</p>
    </div>
  )
}
const { object } = React.PropTypes
FolderSummary.propTypes = { folder: object }

export default FolderSummary
