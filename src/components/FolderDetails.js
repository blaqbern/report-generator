import React from 'react'

function FolderDetails({
  details,
}) {
  return (
    <div>
      <p>{`Customer: ${details.customer_id}`}</p>
      <p>{`PO number: ${details.p_o_number}`}</p>
      <p>{`Date started: ${details.date_started}`}</p>
      {details.date_completed
        ? <p>{`Date completed: ${details.date_completed}`}</p>
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
