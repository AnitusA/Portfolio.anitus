import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import ViewsTitle from '../../components/ViewsTitle'
import Helm from '../../components/SVGs/Helm'

const TimelineItem = ({ item, index }) => {
  return (
    <div
      className='mk-timeline-item'
      data-aos='fade-up'
      data-aos-delay={index * 80}
      data-aos-anchor-placement='top-bottom'
    >
    <div className='mk-timeline-dot' />
    <div className='mk-timeline-card'>
      <div className='mk-timeline-role'>{item.role}</div>
      <div className='mk-timeline-duration'>{item.duration}</div>
      <div className='mk-timeline-points'>
        {(item.points || []).map((text, i) => (
          <div key={i} className='mk-timeline-point' data-aos='fade-up' data-aos-delay={index * 80 + i * 60}>{text}</div>
        ))}
      </div>
    </div>
  </div>
  )
}

const Works = ({ data: { heading, experiences } }) => {
  const sectionRef = useRef(null)
  const iconRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current
      const icon = iconRef.current
      if (!el || !icon) return
      const { top, bottom, height } = el.getBoundingClientRect()
      const winH = window.innerHeight
      const visible = bottom > 0 && top < winH
      if (!visible) {
        icon.style.opacity = '0'
        return
      }
      icon.style.opacity = '1'
      const progress = (winH - top) / (height + winH)
      const clamped = Math.max(0, Math.min(1, progress))
      icon.style.transform = `rotate(${clamped * 1080}deg)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={sectionRef} className='mk-works'>
      <div
        ref={iconRef}
        className='mk-works-settings-icon'>
        <Helm />
      </div>
      <div className='container h100per-min100vh d-flex justify-content-center'>
        <div data-aos='fade-down-left' className='mk-works-container'>
          <ViewsTitle text={heading} />
          <div className='mk-timeline'>
            <div className='mk-timeline-line' />
            {(experiences || []).map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

Works.propTypes = {}

export default Works
