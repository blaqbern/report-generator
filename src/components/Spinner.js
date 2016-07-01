import React from 'react'

export default function Spinner({
  fetching,
  putting,
  item,
}) {
  return (
    <div>
      {fetching ? <span>{`Fetching ${item}`}</span> : null}
      {putting ? <span>{`Creating ${item}`}</span> : null}
    </div>
  )
}
