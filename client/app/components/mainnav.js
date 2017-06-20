import React from 'react'
import {withRouter} from 'react-router';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { push } from 'react-router-redux'
import {NavLink} from 'react-router-dom'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {FormattedMessage, injectIntl} from 'react-intl'
import LocaleButton from '../localeApp/LocaleButton.js'

/**
 * Main navbar for Hamu-Education.
 */
export default class MainNav extends React.Component {
  render() {
    return (
      <Navbar id="main-nav" collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to="/">
              <object id="logo" className="pull-left" type="image/svg+xml" data="/svg/logo.svg">
              </object>
              <h4 className="navbar-text pull-left animated bounceIn">Hamu Learning</h4>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle className="z-depth-1">
            <object id="toggle-logo" type="image/svg+xml" data="/svg/paw-no-animate.svg">
            </object>
          </Navbar.Toggle>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown id="aboutus" title={<FormattedMessage
                    id={'navbar.aboutus'}/>} noCaret>
              <LinkContainer to="/calendar">
                <MenuItem><i className="material-icons">event</i> <FormattedMessage id={'navbar.aboutus.schedule'}/></MenuItem>
              </LinkContainer>
              <LinkContainer to="/contact">
                <MenuItem><i className="material-icons">phone</i> <FormattedMessage id={'navbar.aboutus.contact'}/></MenuItem>
              </LinkContainer>
              <LinkContainer to="/staff">
                <MenuItem><i className="material-icons">supervisor_account</i> <FormattedMessage id={'navbar.aboutus.staff'}/></MenuItem>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown id="courses" title={<FormattedMessage
                    id={'navbar.courses'}/>} noCaret>
              <LinkContainer to="/courses/english">
                <MenuItem>
                  <span className="flag-icon flag-icon-us"></span> <FormattedMessage id={'navbar.courses.english'}/>
                </MenuItem>
              </LinkContainer>
            </NavDropdown>
            <LocaleDropdownSelectorSync />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

/**
 * Locale drop down selector
 */
class LocaleDropdownSelector extends React.Component {
  static propTypes = {
    /** App locale */
    locale: PropTypes.string.isRequired
  }
  /**
   * Produces html flag for the given locale
   * @public
   * @param {string} locale
   */
  localeToFlag(locale) {
    switch(locale) {
      case 'en':
        return <span className="flag-icon flag-icon-us"></span>
      default:
        return <span className="flag-icon flag-icon-vn"></span>
    }
  }
  render() {
    const localeWithoutRegionCode = this.props.locale.toLowerCase().split(/[_-]+/)[0]
    return (
      <NavDropdown id="courses" title={this.localeToFlag(localeWithoutRegionCode || this.props.locale)} noCaret>
        <MenuItem>
          <LocaleButton locale="en">
            <span className="flag-icon flag-icon-us"></span> EN
          </LocaleButton>
        </MenuItem>
        <MenuItem>
          <LocaleButton locale="vi">
            <span className="flag-icon flag-icon-vn"></span> VN
          </LocaleButton>
        </MenuItem>
      </NavDropdown>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locale: state.locale
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const LocaleDropdownSelectorSync = connect(mapStateToProps, mapDispatchToProps)(LocaleDropdownSelector)
