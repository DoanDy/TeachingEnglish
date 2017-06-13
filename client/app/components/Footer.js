import React from 'react'
import {Jumbotron, Row, Col, Badge} from 'react-bootstrap'
import {FormattedMessage} from 'react-intl'

/**
 * Footer component for the app
 */
export default class Footer extends React.Component {
  render() {
    return (
      <Jumbotron id="footer" className="black text-white">
        <div className="container">
          <Row>
            <Col xs={6}>
              <span className="badge-circle"><i className="material-icons">location_on</i></span>
              <h5 className="selectable font-size-20 inline-block line-height-40 spaced">218 Thống Nhất, Nha Trang</h5>
              <br/>
              <span className="badge-circle"><i className="material-icons">phone</i></span>
              <h5 className="selectable font-size-20 inline-block line-height-40 spaced">+1 413 369 8043</h5>
              <br/>
              <span className="badge-circle"><i className="material-icons">email</i></span>
              <h5 className="selectable font-size-20 inline-block line-height-40 spaced"><a href="mailto:customerservice@hamu.edu">customerservice@hamu.edu</a></h5>
            </Col>
            <Col xs={6}>
              <object id="logo" className="pull-left" type="image/svg+xml" data="./svg/logo.svg">
              </object>
              <h4 className="text-capitalize">Hamu Learning</h4>
              <p className="font-size-14 text-grey"><FormattedMessage id="homepage.footer.desc" /></p>
            </Col>
          </Row>
          <Row id="footer-footer" className="text-center">
            <span className="text-center text-grey"><FormattedMessage id="homepage.footer.copyright" /></span>
          </Row>
        </div>
      </Jumbotron>
    )
  }
}
