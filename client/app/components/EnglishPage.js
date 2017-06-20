import React from 'react'
import {connect} from 'react-redux'
import {Jumbotron, Row, Col, ButtonToolbar, ButtonGroup, Button} from 'react-bootstrap'
import {FormattedMessage} from 'react-intl'
import {LinkContainer} from 'react-router-bootstrap'

const JUMBOTRON_1_STYLE = {
  backgroundImage: 'url(/gif/teaching.gif)',
  backgroundSize: 'cover',
  filter: 'grayscale(50%)'
}

export default class EnglishPage extends React.Component {
  componentDidMount() {
    document.title = "Hamu Learning - English"
  }
  render() {
    return (
      <div>
        <Jumbotron id="english-jumbo-1">
          <div className="container">
            <h1 className="smooth-text text-center text-bold text-capitalize" data-aos="fade-right"><FormattedMessage id="english.jumbo-1.title"/></h1>
            <div className="overlay-container">
              <object id="usa" type="image/svg+xml" data="./svg/USA.svg" data-aos="fade-left">
              </object>
              <object id="paw" className="overlay" type="image/svg+xml" data="./svg/paw-no-animate.svg">
              </object>
            </div>
            <h2 className="text-center"><FormattedMessage id="english.jumbo-1.subtitle"/></h2>
            <ButtonGroup id="more-button-group" justified className="horizontal-center">
              <LinkContainer to="/contact">
                <Button href="#" bsStyle="warning"><FormattedMessage id="english.more-button-group.join"/></Button>
              </LinkContainer>
              <LinkContainer to="/">
                <Button href="#" bsStyle="warning"><FormattedMessage id="english.more-button-group.pricing"/></Button>
              </LinkContainer>
              <LinkContainer to="/staff">
                <Button href="#" bsStyle="warning"><FormattedMessage id="english.more-button-group.staff"/></Button>
              </LinkContainer>
            </ButtonGroup>
            <p className="text-center"><FormattedMessage id="english.jumbo-1.desc"/></p>
          </div>
        </Jumbotron>
        <Jumbotron id="english-jumbo-2" data-aos="fade-up">
          <div className="jumbo-decoration">
            <object id="paw" type="image/svg+xml" data="./svg/paw-no-animate.svg">
            </object>
          </div>
          <div className="container">
            <h1 className="smooth-text text-white text-bold" data-aos="fade-right"><FormattedMessage id="english.jumbo-2.title"/></h1>
            <div className="overlay-container">
              <object id="globe" type="image/svg+xml" data="./svg/globe.svg" data-aos="fade-left">
              </object>
              <object id="overlay-paw" className="overlay" type="image/svg+xml" data="./svg/paw-no-animate.svg" data-aos="fade-left">
              </object>
            </div>
            <p className="text-light-grey text-bold"><FormattedMessage id="english.jumbo-2.desc"/></p>
          </div>
        </Jumbotron>
      </div>
    )
  }
}
