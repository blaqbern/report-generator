import React from 'react'

function ReportPreview({ report }) {
  return (
    <div>
      <h2>{'Report Preview'}</h2>
      <p>{report}</p>
    </div>
  )
}
const { object } = React.PropTypes
ReportPreview.propTypes = {
  report: object,
}

export default ReportPreview
