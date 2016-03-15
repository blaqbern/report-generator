import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import ReportGenerator from '../../containers/ReportGenerator/ReportGenerator'
import DevTools from '../../containers/DevTools'
import styles from './root.css'

class Root extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Header title={'NIST Tape Calibration Report Generator'} />
        <ReportGenerator />
        {__DEV__ && !__NO_DEV_TOOLS__ ? <DevTools /> : null}
      </div>
    )
  }
}

export default Root
