import React from 'react'
import {Jumbotron, Row, Col, Badge} from 'react-bootstrap'
import {FormattedMessage} from 'react-intl'

/**
 * Footer component for the app
 */
export default class Footer extends React.Component {
  /**
   * Equalizes heights of jquery objects
   * @param {$[]} A list of jquery objects to equalize heights of
   */
  equalizeHeight(jQs) {
    var maxHeight = 0;
    jQs.forEach((jq) => {
      jq.css('height', 'auto')
      const height = jq.height()
      if(height > maxHeight) {
        maxHeight = height
      }
    })
    jQs.forEach((jq) => {
      jq.css('height', maxHeight)
    })
  }
  componentDidMount() {
    const flexes = [$(this.refs.address_flex), $(this.refs.phone_flex), $(this.refs.email_flex)]
    this.refs.onResize = () => {
      this.equalizeHeight(flexes)
    }
    window.addEventListener("resize", this.refs.onResize)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.refs.onResize);
  }
  render() {
    return (
      <Jumbotron id="footer" className="black text-white">
        <div className="container">
          <Row>
            <Col xs={6}>
              <div ref="address_flex" className="flex flex-align-center flex-row">
                <span className="badge-circle"><i className="material-icons">location_on</i></span>
                <h5 className="selectable font-size-20 spaced">Khu Đô Thị Vĩnh Điềm Trung 79A1, Nha Trang</h5>
              </div>
              <div ref="phone_flex" className="flex flex-align-center flex-row">
                <span className="badge-circle"><i className="material-icons">phone</i></span>
                <h5 className="selectable font-size-20 spaced">+1 413 923 8732</h5>
              </div>
              <div ref="email_flex" className="flex flex-align-center flex-row">
                <span className="badge-circle"><i className="material-icons">email</i></span>
                <h5 className="selectable font-size-20 spaced"><a href="mailto:customerservice@hamu.edu">customerservice@hamu.edu</a></h5>
              </div>
            </Col>
            <Col xs={6}>
              <object id="logo" className="pull-left" type="image/svg+xml" data="./svg/logo.svg">
              </object>
              <h4 className="text-capitalize">Hamu Learning</h4>
              <p className="font-size-14 text-grey"><FormattedMessage id="footer.desc" /></p>
            </Col>
          </Row>
          <Row id="footer-footer" className="text-center">
            <span className="text-center text-grey"><FormattedMessage id="footer.copyright" /></span>
          </Row>
        </div>
      </Jumbotron>
    )
  }
}
