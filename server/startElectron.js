const childProcess = require('child_process')
const electron = require('electron-prebuilt')

module.exports = function startElectron() {
  childProcess.spawn(electron, ['.'])
}
