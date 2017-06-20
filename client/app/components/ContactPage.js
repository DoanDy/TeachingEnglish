import React from 'react'
import {Jumbotron, Row, Col, Panel} from 'react-bootstrap'
import {FormattedMessage} from 'react-intl'

const JUMBO_1_STYLE = {
  backgroundImage: 'url("./gif/class.gif")'
}

const STORE_FRONT_STYLE = {
  backgroundImage: 'url("./img/store_front.jpg")'
}

export default class ContactPage extends React.Component {
  componentDidMount() {
    document.title = "Hamu Learning - Contact"
  }
  render() {
    return(
      <div>
        <Jumbotron id="contact-jumbo-1" style={JUMBO_1_STYLE}>
          <div className="container height-100">
            <Row className="height-100">
              <Col xs={6} sm={8}>
                <h2 className="text-white text-bold"><FormattedMessage id="contact.jumbo-1.title" /></h2>
              </Col>
              <Col xs={6} sm={4} className="height-100">
                <Panel id="contact-panel" className="height-100 border-none z-index-1 text-white">
                  <div className="margin-top-10 margin-bottom-40">
                    <div className="flex flex-align-center flex-row">
                      <span className="badge-circle white"><i className="material-icons text-brown">phone</i></span>
                      <h3 className="margin-vertical-0"><FormattedMessage id="contact.jumbo-1.call" /></h3>
                    </div>
                    <hr />
                    <div className="visible-xs">
                      <span>+1 413 923 8732</span>
                      <span className="text-grey block margin-top-10"><FormattedMessage id="contact.jumbo-1.eng-only" /></span>
                      <span>+1 413 923 8143</span>
                    </div>
                    <div className="hidden-xs">
                      <div className="inline-block margin-right-10">
                        <span className="text-grey"><FormattedMessage id="contact.jumbo-1.eng-only" /></span>
                      </div>
                      <div className="inline-block">
                        <span className="selectable">+1 413 923 8732</span>
                        <br />
                        <span className="selectable">+1 413 369 8043</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-align-center flex-row">
                    <span className="badge-circle white"><i className="material-icons text-brown">email</i></span>
                    <h3 className="margin-vertical-0"><FormattedMessage id="contact.jumbo-1.email" /></h3>
                  </div>
                  <hr/>
                  <span className="selectable break-word">customerservice@hamu.edu</span>
                </Panel>
              </Col>
            </Row>
          </div>
        </Jumbotron>
        <Jumbotron id="location" className="white" data-aos="fade-up">
          <div className="jumbo-decoration">
            <object id="paw" type="image/svg+xml" data="./svg/paw-no-animate.svg">
            </object>
          </div>
          <div className="container">
            <h1 data-aos="fade-right"><FormattedMessage id="contact.jumbo-2.location" /></h1>
            <Row className="flex margin-bottom-20" data-aos="fade-left">
              <Col xs={5} sm={3}>
                <div className="table height-100">
                  <div className="not-fill">
                    <div className="flex flex-align-center flex-row">
                      <span className="badge-circle"><i className="material-icons text-white">location_on</i></span>
                      <h5 className="selectable font-size-20 spaced">Khu Đô Thị Vĩnh Điềm Trung 79A1, Nha Trang</h5>
                    </div>
                  </div>
                  <div className="fill background-cover" style={STORE_FRONT_STYLE}>
                    <span> </span>
                  </div>
                </div>
              </Col>
              <Col xs={7} sm={9} className="min-height-80vh">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAb-VfrMWGC9exjUv0nqGieIkR6pRgNCck&q=12.257982,109.166662"
                  allowFullScreen>
                </iframe>
              </Col>
            </Row>
            <p className="speech margin-top-50"><FormattedMessage id="contact.jumbo-2.msg" /></p>
          </div>
        </Jumbotron>
      </div>
    )
  }
}
