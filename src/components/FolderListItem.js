import React from 'react'
import { connect } from 'react-redux'
import FolderQuickLook from './FolderQuickLook'
import { toggleExpandCollapse } from '../redux/modules/folders'
import styles from './css/FolderListItem.css'

function FolderListItem({
  folder,
  handleToggleExpandClick,
}) {
  const { fields, expanded } = folder
  return (
    <div>
      <div className={styles.heading}>
        {fields.testNumber}
        <button onClick={handleToggleExpandClick}>{'⌄'}</button>
      </div>
      {expanded
        ? <FolderQuickLook details={fields} />
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
)(FolderListItem)
