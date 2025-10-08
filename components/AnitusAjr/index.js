import { useEffect, useRef, useState } from 'react'
import AnitusSVG from './AnitusSVG'

const SvgWrapper = ({ SVG, className, ...rest }) => (
  <div
    {...rest}
    className={`mk-muneeb-khan-parallax ${className}`}
  >
    <SVG />
  </div>
)

export default function AnitusAjr({ animate = true }) {
  const ref = useRef()
  const [mount, handleMount] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isInViewport = () => {
    const rect = ref?.current?.getBoundingClientRect()
    return (rect?.top < window.innerHeight / 2)
  }

  const handleScroll = () => {
    handleMount(isInViewport())
  }

  const [reducedMotion, setReducedMotion] = useState(false)
  useEffect(() => {
    try {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
      const handler = () => setReducedMotion(mq.matches)
      handler()
      mq.addEventListener ? mq.addEventListener('change', handler) : mq.addListener(handler)
      return () => mq.removeEventListener ? mq.removeEventListener('change', handler) : mq.removeListener(handler)
    } catch (e) {}
  }, [])

  const noAnimate = !animate || reducedMotion

  return (
    <div ref={ref} className={`mk-muneeb-khan ${mount ? 'mk-muneeb-khan-visible' : ''} ${noAnimate ? 'mk-muneeb-khan-no-animate' : ''}`}>
      <SvgWrapper className="mk_svg_M" SVG={AnitusSVG} />
    </div>
  )
}
