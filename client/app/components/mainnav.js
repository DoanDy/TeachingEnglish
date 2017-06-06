import React from 'react'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import {FormattedMessage} from 'react-intl'

/**
 * Main navbar for Hamu-Education.
 */
export default class MainNav extends React.Component {
  render() {
    return (
      <Navbar id="main-nav" collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">
              <object id="logo" type="image/svg+xml" data="./svg/logo.svg">
              </object>
            </a>
          </Navbar.Brand>
          <h4 className="navbar-text">Hamu Learning</h4>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown id="courses" title={<FormattedMessage
                    id={'navbar.courses'} />}>
              <MenuItem>English</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
