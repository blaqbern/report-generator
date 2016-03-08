import React from 'react'
import { connect } from 'react-redux'
import PendingFolders from '../../components/PendingFolders/PendingFolders'
import RecentlyCompleted from '../../components/RecentlyCompleted/RecentlyCompleted'
import ReportPreview from '../../components/ReportPreview/ReportPreview'

function ReportGenerator({
  pendingFolders,
  recentlyCompleted,
  currentReport,
}) {
  return (
    <div>
      <PendingFolders folders={pendingFolders} />
      <RecentlyCompleted folders={recentlyCompleted} />
      <ReportPreview report={currentReport} />
    </div>
  )
}
const { array, object } = React.PropTypes
ReportGenerator.propTypes = {
  pendingFolders: array,
  recentlyCompleted: array,
  currentReport: object,
}

function mapStateToProps(state) {
  const folders = state.folders.reduce((acc, nextFolder) => {
    if (nextFolder.report) {
      return {
        pending: acc.pending,
        completed: acc.completed.concat([nextFolder]),
      }
    }
    return {
      pending: acc.pending.concat([nextFolder]),
      completed: acc.completed,
    }
  }, { pending: [], completed: [] })
  return {
    pendingFolders: folders.pending,
    recentlyCompleted: folders.completed,
    currrentFolder: state.currrentFolder,
  }
}

export default connect(mapStateToProps)(ReportGenerator)
