import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFolder } from '../redux/modules/folder'
import { fetchTapes } from '../redux/modules/folder'
import Spinner from '../components/Spinner'
import { Badge, Button, Col, PageHeader, Panel } from 'react-bootstrap'

class Folder extends Component {
  componentWillMount() {
    const { handleFetchFolder, params } = this.props
    handleFetchFolder(params.testNumber)
  }
  componentWillReceiveProps(newProps) {
    const { handleFetchFolder, params } = this.props
    if (params.testNumber !== newProps.params.testNumber) {
      handleFetchFolder(newProps.params.testNumber)
    }
  }
  render() {
    const { folder, fetchingFolder, handleFetchTapes } = this.props
    const panelTitle = (title) => <h3>{title}</h3>
    return fetchingFolder
      ? <Spinner fetching item="folder" />
      : (
        <div>
          <PageHeader>
            {folder.fields.testNumber} <Badge bsStyle="info">
              {`${folder.fields.numberOfTests} tapes`}
            </Badge>
          </PageHeader>
          <Col md={8}>
            <p>{`PO Number: ${folder.fields.pONumber}`}</p>
            <Button onClick={handleFetchTapes} bsStyle="info">
              Get tapes associated with this folder
            </Button>
          </Col>
          <Col md={4}>
            <Panel header={panelTitle('Customer')}>
              <p>{folder.fields.name}</p>
              <p>{folder.fields.addressLine1}</p>
              <p>{folder.fields.addressLine2}</p>
              <p>{`${folder.fields.city}, ${folder.fields.state} ${folder.fields.zip}`}</p>
            </Panel>
          </Col>
        </div>
      )
  }
}
const { bool, func, object } = React.PropTypes
Folder.propTypes = {
  dispatch: func,
  fetchingFolder: bool,
  folder: object,
  handleFetchFolder: func,
  handleFetchTapes: func,
  params: object,
}

function mapStateToProps(state, ownProps) {
  const { testNumber } = ownProps.params
  const [f] = state.folders.list.filter(folder =>
    folder.fields.testNumber === testNumber
  )
  return {
    folder: f,
    fetchingFolder: f.isFetching,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  const { testNumber } = ownProps.params
  return {
    handleFetchTapes: () => dispatch(fetchTapes(testNumber)),
    handleFetchFolder: (id) => dispatch(fetchFolder(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Folder)
