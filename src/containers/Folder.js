import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFolder } from '../redux/modules/folder'
import Spinner from '../components/Spinner'

class Folder extends Component {
  componentWillMount() {
    const { dispatch, params } = this.props
    dispatch(fetchFolder(params.testNumber))
  }
  componentWillReceiveProps(newProps) {
    const { dispatch, params } = this.props
    if (params.testNumber !== newProps.params.testNumber) {
      dispatch(fetchFolder(newProps.params.testNumber))
    }
  }
  render() {
    const { folder, fetchingFolder } = this.props
    return fetchingFolder
      ? <Spinner fetching item="folder" />
      : (
        <div>
          <h1>{`${folder.fields.testNumber}`}</h1>
          <p>{`PO Number: ${folder.fields.pONumber}`}</p>
          <p>{`Customer: ${folder.fields.name}`}</p>
          <p>{folder.fields.addressLine1}</p>
          <p>{folder.fields.addressLine2}</p>
          <p>{`${folder.fields.city}, ${folder.fields.state} ${folder.fields.zip}`}</p>
          <p>{`${folder.fields.numberOfTests} tapes`}</p>
        </div>
      )
  }
}
const { bool, func, object } = React.PropTypes
Folder.propTypes = {
  dispatch: func,
  fetchingFolder: bool,
  folder: object,
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

export default connect(mapStateToProps)(Folder)
