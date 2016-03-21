import React from 'react'
import { connect } from 'react-redux'
import FolderDetails from './FolderDetails'
import { toggleExpandCollapse } from '../redux/modules/folders'
import styles from './css/Folder.css'

function Folder({
  folder,
  handleToggleExpandClick,
}) {
  const { fields, expanded } = folder
  return (
    <div>
      <div
        className={styles.heading}
        onClick={handleToggleExpandClick}
      >
        {fields.testNumber}
      </div>
      {expanded
        ? <FolderDetails details={fields} />
        : null
      }
    </div>
  )
}

function mapDispatchToProps(dispatch, ownProps) {
  const { testNumber } = ownProps.folder.fields
  return {
    handleToggleExpandClick: () => dispatch(
      toggleExpandCollapse(testNumber)
    ),
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(Folder)