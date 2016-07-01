import React, { Component } from 'react'
import DevTools from '../containers/DevTools'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class Root extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <LinkContainer to="/">
              <Navbar.Brand style={{ cursor: 'pointer' }}>
                NIST Tape Cal Dashboard
              </Navbar.Brand>
            </LinkContainer>
          </Navbar.Header>
          <Nav pullRight>
            <LinkContainer to="/measure"><NavItem>Measure</NavItem></LinkContainer>
            <LinkContainer to="/report"><NavItem>Report</NavItem></LinkContainer>
          </Nav>
        </Navbar>
        <div className="container">
          {this.props.children}
        </div>
        {__DEV__ && !__NO_DEV_TOOLS__ ? <DevTools /> : null}
      </div>
    )
  }
}
const { object } = React.PropTypes
Root.propTypes = { children: object }

export default Root
