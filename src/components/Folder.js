import React from 'react'

function Folder({ params }) {
  return (
    <div>
      {`${params.testNumber}`}
    </div>
  )
}
const { object } = React.PropTypes
Folder.propTypes = { folder: object }

export default Folder
