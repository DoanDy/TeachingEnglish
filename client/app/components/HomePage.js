import React from 'react'
import LocalizedTextillate from './LocalizedTextillate.js'
import {Jumbotron, ButtonToolbar, Button, Panel} from 'react-bootstrap'
import {FormattedMessage} from 'react-intl'
import {LinkContainer} from 'react-router-bootstrap'


const JUMBOTRON_1_STYLE = {
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.45),rgba(0, 0, 0, 0.45)), url(/img/gallery1.jpg)'
}

const COIN_STYLE = {
  backgroundImage: 'url(/svg/hamu-coin.svg)',
  backgroundSize: "cover"
}

/**
 * Home page component for the app
 */
export default class HomePage extends React.Component {
  componentDidMount() {
    document.title = "Hamu Learning - Beta!"
  }
  render() {
    return (
      <div id="homepage-body">
        <Jumbotron id="homepage-jumbo-1" style={JUMBOTRON_1_STYLE}>
          <div className="container height-100 flex vertical-center">
            <div className="hidden-xs">
              <h1 className="tlt text-white text-bold text-capitalize smooth-text">
                <LocalizedTextillate inAnimation={{ effect: 'fadeInLeft', sync: true }} id={'homepage.jumbo-1.title'} />
              </h1>
              <ButtonToolbar data-aos="fade-left">
                <LinkContainer to="/calendar">
                  <Button className="transparent" bsSize="lg"><FormattedMessage id='homepage.jumbo-1.btn1' /></Button>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <Button className="transparent" bsSize="lg"><FormattedMessage id='homepage.jumbo-1.btn2' /></Button>
                </LinkContainer>
              </ButtonToolbar>
            </div>
            <div id="jumbo-1-content-xs" className="visible-xs width-100">
              <h1 className="tlt text-center text-white text-bold text-capitalize smooth-text">
                <LocalizedTextillate inAnimation={{ effect: 'fadeInLeft', sync: true }} id={'homepage.jumbo-1.title'} />
              </h1>
              <Button className="transparent" bsSize="lg" block><FormattedMessage id='homepage.jumbo-1.btn1' /></Button>
              <Button className="transparent" bsSize="lg" block><FormattedMessage id='homepage.jumbo-1.btn2' /></Button>
            </div>
          </div>
        </Jumbotron>
        <div id="homepage-jumbo-2-container">
          <Jumbotron id="homepage-jumbo-2" data-aos="fade-up">
            <div className="jumbo-decoration">
              <object id="paw" type="image/svg+xml" data="./svg/paw-no-animate.svg">
              </object>
            </div>
            <div className="container">
              <h1 className="text-white" data-aos="fade-right"><FormattedMessage id="homepage.jumbo-2.title"/></h1>
              <p className="text-white" data-aos="fade-right"><FormattedMessage id="homepage.jumbo-2.subtitle"/></p>
              <div className="row" data-aos="fade-left">
                <div className="col-xs-6 text-center">
                  <div className="circle-md" style={COIN_STYLE}>
                    <div className="circle-container text-center z-depth-1">
                      <span className="text-white"><FormattedMessage id="homepage.jumbo-2.startingAt"/></span>
                      <h1>2.000.000 đ</h1>
                      <span className="text-white"><FormattedMessage id="homepage.jumbo-2.perMonth"/></span>
                    </div>
                  </div>
                  <h2 className="text-white"><i className="material-icons">person</i> <FormattedMessage id="homepage.jumbo-2.private"/></h2>
                  <p className="font-size-14 text-light-grey"><FormattedMessage id="homepage.jumbo-2.private.desc"/></p>
                </div>
                <div className="col-xs-6 text-center">
                  <div className="circle-md" style={COIN_STYLE}>
                    <div className="circle-container text-center z-depth-1">
                      <span className="text-white"><FormattedMessage id="homepage.jumbo-2.startingAt"/></span>
                      <h1>1.000.000 đ</h1>
                      <span className="text-white"><FormattedMessage id="homepage.jumbo-2.perMonth"/></span>
                    </div>
                  </div>
                  <h2 className="text-white"><i className="material-icons">group</i> <FormattedMessage id="homepage.jumbo-2.group"/></h2>
                  <p className="font-size-14 text-light-grey"><FormattedMessage id="homepage.jumbo-2.group.desc"/></p>
                </div>
              </div>
            </div>
          </Jumbotron>
          <Jumbotron  id="homepage-jumbo-3" className="white" data-aos="fade-up">
            <div className="jumbo-decoration">
              <object id="paw" type="image/svg+xml" data="./svg/paw-no-animate.svg">
              </object>
            </div>
            <div className="container">
              <object id="goal" type="image/svg+xml" data="./svg/goal.svg" data-aos="fade-left">
              </object>
              <h1 data-aos="fade-right"><FormattedMessage id="homepage.jumbo-3.title"/></h1>
              <p><FormattedMessage id="homepage.jumbo-3.desc" /></p>
            </div>
          </Jumbotron>
        </div>
      </div>
    )
  }
}
