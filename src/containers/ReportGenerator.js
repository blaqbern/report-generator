import React from 'react'
import { connect } from 'react-redux'
import { fetchFolders } from '../redux/modules/folders'
import Folders from '../components/Folders'
import {
  Button,
  Col,
  Grid,
  Row,
} from 'react-bootstrap'

function ReportGenerator({
  children,
  fetchError,
  fetchingFolders,
  handleFetchClick,
  activeFolders,
}) {
  return (
    <Grid>
      <Row>
        <Col md={2}>
          <div>
            <h3>Active Folders</h3>
            {fetchError
              ? <div>{fetchError}</div>
              : <Folders folders={activeFolders} beingFetched={fetchingFolders} />
            }
          </div>
          <Button bsStyle="info" onClick={handleFetchClick}>Fetch Active Folders</Button>
        </Col>
        <Col md={10}>
          {children}
        </Col>
      </Row>
    </Grid>
  )
}
const { array, bool, func, object } = React.PropTypes
ReportGenerator.propTypes = {
  children: object,
  fetchError: bool,
  fetchingFolders: bool,
  handleFetchClick: func,
  activeFolders: array,
}

function mapStateToProps(state) {
  return {
    fetchError: state.folders.error,
    fetchingFolders: state.folders.isFetching,
    activeFolders: state.folders.list,
  }
}

function mapDispatchToProps(dispatch) {
  return { handleFetchClick: () => dispatch(fetchFolders('Blackburn')) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportGenerator)
