import React from 'react'
import {Navbar} from 'react-bootstrap'

/**
 * Main navbar for Hamu-Education.
 */
export default class MainNav extends React.Component {
  render() {
    return (
      <Navbar id="main-nav">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">
              <object id="logo" type="image/svg+xml" data="./svg/logo.svg"></object>
            </a>
          </Navbar.Brand>
          <h3 className="navbar-text">Hamu Learning</h3>
        </Navbar.Header>
      </Navbar>
    )
  }
}
