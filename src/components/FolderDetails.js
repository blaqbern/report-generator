import React from 'react'

function FolderDetails({
  details,
}) {
  return (
    <div>
      <p>{`Customer: ${details.customerId}`}</p>
      <p>{`PO number: ${details.pONumber}`}</p>
      <p>{`Date started: ${details.dateStarted}`}</p>
      {details.date_Completed
        ? <p>{`Date completed: ${details.dateCompleted}`}</p>
        : null
      }
      {details.report
        ? (
          <div>
            <button>{'view report'}</button>
            <button>{'download report'}</button>
          </div>
        )
        : null
      }
    </div>
  )
}

export default FolderDetails
