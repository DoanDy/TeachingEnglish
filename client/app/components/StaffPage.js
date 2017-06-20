import React from 'react'
import {Jumbotron, Row, Col, Thumbnail, Badge} from 'react-bootstrap'
import {FormattedMessage} from 'react-intl'

export default class StaffPage extends React.Component {
  componentDidMount() {
    document.title = "Hamu Learning - Staff"
  }
  render() {
    return (
      <Jumbotron id="staff-jumbo-1" className="white">
        <div className="container">
          <h1 className="text-center margin-bottom-40" data-aos="fade-right"><FormattedMessage id="staff.jumbo-1.title" /></h1>
          <Row data-aos="fade-left">
            <Col xs={6}>
              <Thumbnail src="/img/kai_matsuda.jpg">
                <h3><i className="material-icons">pets</i> <span className="vertical-align-middle inline-block">Kai Matsuda</span></h3>
                <Badge className="brown"><FormattedMessage id="role.teacher" /></Badge>
                <hr />
                <p><i className="material-icons">language</i> <span className="font-size-16 text-dark-grey"><FormattedMessage id="staff.kai-matsuda.langs"/></span></p>
                <p><i className="material-icons">school</i> <span className="font-size-16 text-dark-grey"><FormattedMessage id="staff.kai-matsuda.edu" /></span></p>
              </Thumbnail>
            </Col>
            <Col xs={6}>
              <Thumbnail src="/img/kevin_doan.jpg">
                <h3><i className="material-icons">pets</i> <span className="vertical-align-middle inline-block">Kevin Doan</span></h3>
                <Badge className="warning"><FormattedMessage id="role.translator" /></Badge>
                <hr />
                <p><i className="material-icons">language</i> <span className="font-size-16 text-dark-grey"><FormattedMessage id="staff.kevin-doan.langs" /></span></p>
                <p><i className="material-icons">school</i> <span className="font-size-16 text-dark-grey"><FormattedMessage id="staff.kevin-doan.edu" /></span></p>
              </Thumbnail>
            </Col>
          </Row>
        </div>
      </Jumbotron>
    )
  }
}
