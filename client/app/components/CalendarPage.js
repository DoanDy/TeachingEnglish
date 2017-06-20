import React from 'react'
import {Jumbotron, Table, OverlayTrigger, Popover} from 'react-bootstrap'
import PropTypes from 'prop-types'
import CalendarDates from '../mockData.json'
import {FormattedMessage} from 'react-intl'
import FormatMessage from './FormatMessage.js'

export default class CalendarPage extends React.Component {
  render() {
    return (
      <Jumbotron id="calendar.jumbo-1" className="relative">
        <div className="container">
          <h1 className="text-center speech" data-aos="fade-right"><FormattedMessage id="calendar.jumbo-1.title" /></h1>
          <Calendar range={{start: 13, end: 21}} events={CalendarDates} onClick={this.handleClick} data-aos="fade-left" />
        </div>
      </Jumbotron>
    )
  }
}

const DAYS_OF_THE_WEEK = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']

class Calendar extends React.Component {
  static propTypes = {
    /** Range for time of the day 0-24 */
    range: PropTypes.shape({
      /** Calendar start hour */
      start: PropTypes.number.isRequired,
      /** Calendar end hour */
      end: PropTypes.number.isRequired
    }),
    /** Events to be shown on the calendar */
    events: PropTypes.arrayOf(PropTypes.shape({
      /** Event name */
      name: PropTypes.shape({
        /** Event name in English */
        en: PropTypes.string.isRequired,
        /** Event name in Vietnamese */
        vi: PropTypes.string.isRequired
      }),
      /** List of days and hours of the week */
      dates: PropTypes.arrayOf(PropTypes.shape({
        /** Day of the week in english 3 char notation */
        dayOfWeek: PropTypes.string.isRequired,
        /** Start time of the day 0-24 */
        startTime: PropTypes.number.isRequired,
        /** Duration of the event in hours */
        duration: PropTypes.number.isRequired
      }))
    })),
    /** On click handler */
    onClick: PropTypes.func,
    /** CSS class to be applied to the table */
    className: PropTypes.string
  }
  /**
   * Click handler for events
   * @param {SyntheticEvent} e
   * @param {Object} selected
   */
  handleClick(e, selected) {
    e.stopPropagation()
    this.props.onClick(selected)
  }

  /**
   * Creates a Hash Table for looking up events
   * @param {Object} range
   * @param {Object} events
   * @return {Object} Hash table
   */
  eventsHashTable(range, events) {
    const duration = range.end - range.start + 1
    const hoursLookUp = Array(duration).fill(0).reduce(function(acc, elem, idx) {
      acc[(range.start + idx)] = {}
      return acc
    }, {})
    return events.reduce(function(acc, event) {
      event.dates.forEach((date) => {
        acc[Math.floor(date.startTime)][date.dayOfWeek] = event
      })
      return acc
    }, hoursLookUp)
  }
  /**
   * Creates the events popover
   * @param {Object} event
   */
  eventPopover(event) {
    const {name,enrollment,ageRange,id} = event
    return (
      <Popover id={"popover-" + id} title={<FormatMessage messages={name} />}>
        <p><i className="material-icons">person</i>
          <FormattedMessage id="calendar.label.student"
            values={{
              enrollment: enrollment
            }}/>
        </p>
        <p>
          {
            (ageRange == "adults") ?
              (<span className="text-bold"><FormattedMessage id="calendar.label.adults" /></span>) :
              (<span><span className="text-bold"><FormattedMessage id="calendar.label.children" /></span> {ageRange}</span>)
          }
        </p>
      </Popover>
    )
  }
  /**
   * Creates table cell corresponding to the given hour and day of the week
   * @param {number} hour
   * @param {string} dayOfWeek
   * @param {Object} event
   * @return {ReactElement} tablerow
   */
  tcell(hour, dayOfWeek, event) {
    if(event) {
      const curr_date = event.dates.find((date) => {
        return (date.dayOfWeek == dayOfWeek && Math.floor(date.startTime) == hour)
      })
      const {startTime, duration}  = curr_date
      const off_set = ((startTime % 1) !== 0)
      const duration_formatted = "duration-" + (duration + "").replace(".", "-")
      const content = (
        <div className={"event-content vertical-align-middle semi-transparent hover table-cell " + event.className}>
          <FormatMessage messages={event.name}/>
        </div>
      )
      const pop_over = event.noPopover ? null : this.eventPopover(event)
      const context = event.noPopover ? content : (
        <OverlayTrigger trigger={["hover", "focus"]} placement="right" overlay={pop_over}>
          {content}
        </OverlayTrigger>
      )
      return (
        <td key={"cal-row-" + hour + "_cal-col-" + dayOfWeek} className="relative">
          <div className={"table event " + (off_set ? "off-set-half-an-hour " : "") + duration_formatted}>
            {context}
          </div>
        </td>
      )
    }
    return (
      <td key={"cal-row-" + hour + "_cal-col-" + dayOfWeek}>
      </td>
    )
  }
  /**
   * Creates table row corresponding to the given hour
   * @param {number} hour
   * @param {Object} eventsHashHour
   * @return {ReactElement} tablerow
   */
  row(hour, eventsHashHour) {
    return (
      <tr key={"cal-row-" + hour}>
        <th>{hour}</th>
        {
          Array(7).fill(0).map((elem, idx) => {
            const dayOfWeek = DAYS_OF_THE_WEEK[idx]
            const event = eventsHashHour[dayOfWeek]
            return this.tcell(hour, dayOfWeek, event)
          })
        }
      </tr>
    )
  }
  /**
   * Creates tbody element for the calendar
   * @param {Object} range
   * @param {Object} eventsHash
   * @return {ReactElement} tbody
   */
  tbody(range, eventsHash) {
    const duration = range.end - range.start + 1
    return(
      <tbody>
        {
          Array(duration).fill(0).map((elem, idx) => {
            const hour = range.start + idx
            return this.row(hour, eventsHash[hour])
          })
        }
      </tbody>
    )
  }
  render() {
    const {range, events, className} = this.props
    const eventsHash = this.eventsHashTable(range, events)
    return (
      <Table id="calendar" striped hover>
        <thead>
          <tr>
            <th></th>
            <th><FormattedMessage id="calendar.daysOfTheWeek.sun" /></th>
            <th><FormattedMessage id="calendar.daysOfTheWeek.mon" /></th>
            <th><FormattedMessage id="calendar.daysOfTheWeek.tue" /></th>
            <th><FormattedMessage id="calendar.daysOfTheWeek.wed" /></th>
            <th><FormattedMessage id="calendar.daysOfTheWeek.thu" /></th>
            <th><FormattedMessage id="calendar.daysOfTheWeek.fri" /></th>
            <th><FormattedMessage id="calendar.daysOfTheWeek.sat" /></th>
          </tr>
        </thead>
        {
          this.tbody(range, eventsHash)
        }
      </Table>
    )
  }
}
