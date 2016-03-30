import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from '../components/Header'
import DevTools from '../containers/DevTools'
import styles from './css/root.css'

class Root extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Header title={'NIST Tape Calibration Report Generator'} />
        <div>
          <ul>
            <li style={{ display: 'inline' }}>
              <Link className={styles.link} to="/">{'Home'}</Link>
            </li>
            {' '}
            <li style={{ display: 'inline' }}>
              <Link className={styles.link} to="/measure">{'Measure'}</Link>
            </li>
            {' '}
            <li style={{ display: 'inline' }}>
              <Link className={styles.link} to="/report">{'Report'}</Link>
            </li>
          </ul>
        </div>
        {__DEV__ && !__NO_DEV_TOOLS__ ? <DevTools /> : null}
        {this.props.children}
      </div>
    )
  }
}
const { object } = React.PropTypes
Root.propTypes = { children: object }

export default Root
