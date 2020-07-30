import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'

import { Container } from './styles'
import { timeline } from '../../i18n/Languages'

import { milestones } from './milestones'
import { Milestone } from '../../theme'
import 'react-vertical-timeline-component/style.min.css'

function Timeline({ phrases }) {
  return (
    <Container>
      <h1>{phrases.title}</h1>
      <VerticalTimeline>
        {milestones.map((m, i) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: Milestone[i].background,
              color: Milestone[i].text
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${Milestone[i].background}`
            }}
            date={!i ? m.year + phrases.today : m.year}
            iconStyle={{ background: Milestone[i].background }}
            icon={<m.icon />}
            key={m.title}
          >
            <a
              href={m.link}
              target="_blank"
              rel="noopener noreferrer"
              className="vertical-timeline-element-title"
              style={{ color: Milestone[i].link }}
            >
              {m.title}
            </a>
            <h4 className="vertical-timeline-element-subtitle">{m.subtitle}</h4>
            {phrases.milestone[i].map(text => (
              <p key={text}>{text}</p>
            ))}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  )
}

Timeline.propTypes = {
  phrases: PropTypes.shape({
    title: PropTypes.string.isRequired,
    today: PropTypes.string,
    milestone: PropTypes.arrayOf(PropTypes.array).isRequired
  }).isRequired
}

const mapStateToProps = () => ({
  phrases: timeline()
})

export default connect(mapStateToProps)(Timeline)
