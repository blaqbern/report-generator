import React from 'react'
import FolderSummary from './FolderSummary'
import Spinner from './Spinner'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

function Folders({
  folders,
  beingFetched,
}) {
  return beingFetched
    ? <Spinner fetching item="Folders" />
    : (
      <ListGroup>
        {folders.map((folder, index) =>
          <ListGroupItem key={index}>
            <FolderSummary folder={folder} />
          </ListGroupItem>
        )}
      </ListGroup>
    )
}
const { array } = React.PropTypes
Folders.propTypes = {
  folders: array,
}

export default Folders
