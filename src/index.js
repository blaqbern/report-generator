import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './redux/configureStore'
import Root from './containers/Root'
import WelcomePage from './components/WelcomePage'
import ReportIndex from './components/ReportIndex'
import MeasurementConsole from './containers/MeasurementConsole'
import ReportGenerator from './containers/ReportGenerator'
import Folder from './containers/Folder'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Root}>
        <IndexRoute component={WelcomePage} />
        {/* TODO create 'Calibration Config route components' */}
        {/* <Route path="configure" component={CalibrationConfig} /> */}
        <Route path="measure" component={MeasurementConsole} />
        <Route path="report" component={ReportGenerator}>
          <IndexRoute component={ReportIndex} />
          <Route path="folders/:testNumber" component={Folder} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
