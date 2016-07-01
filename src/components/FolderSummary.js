import React from 'react'
import { Button,  OverlayTrigger, Tooltip } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function FolderSummary({ folder }) {
  const { name, testNumber } = folder.fields
  const tooltip = <Tooltip id="testNumber">{name}</Tooltip>
  return (
    <div>
      <LinkContainer to={`report/folders/${testNumber}`}>
        <OverlayTrigger placement="right" overlay={tooltip}>
          <Button bsStyle="link">{`${testNumber}`}</Button>
        </OverlayTrigger>
      </LinkContainer>
      {/* <span>{`${folder.fields.name}`}</span> */}
    </div>
  )
}
const { object } = React.PropTypes
FolderSummary.propTypes = { folder: object }

export default FolderSummary
