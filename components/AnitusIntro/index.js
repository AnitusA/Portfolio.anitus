import { useEffect, useRef, useState } from "react";

const SvgWrapper = ({ children, className, ...rest }) => (
  <div
    {...rest}
    className={`mk-anitus-intro-parallax ${className}`}
  >
    {children}
  </div>
)

// Modern SVG letter components with consistent styling
const LetterA = () => (
  <svg viewBox="0 0 100 100" className="letter-svg">
    <defs>
      <linearGradient id="letterGradientA" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" />
        <stop offset="50%" stopColor="#00ff88" />
        <stop offset="100%" stopColor="currentColor" />
      </linearGradient>
    </defs>
    <path d="M25 85 L40 25 L60 25 L75 85 M35 60 L65 60" 
          stroke="url(#letterGradientA)" 
          strokeWidth="6" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="letter-path" />
    <circle cx="50" cy="20" r="3" fill="url(#letterGradientA)" className="letter-accent" />
  </svg>
)

const LetterN = () => (
  <svg viewBox="0 0 100 100" className="letter-svg">
    <defs>
      <linearGradient id="letterGradientN" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" />
        <stop offset="50%" stopColor="#00ff88" />
        <stop offset="100%" stopColor="currentColor" />
      </linearGradient>
    </defs>
    <path d="M20 25 L20 85 M20 25 L80 85 M80 25 L80 85" 
          stroke="url(#letterGradientN)" 
          strokeWidth="6" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="letter-path" />
    <circle cx="50" cy="55" r="2" fill="url(#letterGradientN)" className="letter-accent" />
  </svg>
)

const LetterI = () => (
  <svg viewBox="0 0 100 100" className="letter-svg">
    <defs>
      <linearGradient id="letterGradientI" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" />
        <stop offset="50%" stopColor="#00ff88" />
        <stop offset="100%" stopColor="currentColor" />
      </linearGradient>
    </defs>
    <path d="M30 25 L70 25 M50 25 L50 85 M30 85 L70 85" 
          stroke="url(#letterGradientI)" 
          strokeWidth="6" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="letter-path" />
    <circle cx="50" cy="15" r="3" fill="url(#letterGradientI)" className="letter-accent" />
  </svg>
)

const LetterT = () => (
  <svg viewBox="0 0 100 100" className="letter-svg">
    <defs>
      <linearGradient id="letterGradientT" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" />
        <stop offset="50%" stopColor="#00ff88" />
        <stop offset="100%" stopColor="currentColor" />
      </linearGradient>
    </defs>
    <path d="M20 25 L80 25 M50 25 L50 85" 
          stroke="url(#letterGradientT)" 
          strokeWidth="6" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="letter-path" />
    <circle cx="50" cy="90" r="3" fill="url(#letterGradientT)" className="letter-accent" />
  </svg>
)

const LetterU = () => (
  <svg viewBox="0 0 100 100" className="letter-svg">
    <defs>
      <linearGradient id="letterGradientU" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" />
        <stop offset="50%" stopColor="#00ff88" />
        <stop offset="100%" stopColor="currentColor" />
      </linearGradient>
    </defs>
    <path d="M20 25 L20 70 Q20 85 35 85 L65 85 Q80 85 80 70 L80 25" 
          stroke="url(#letterGradientU)" 
          strokeWidth="6" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="letter-path" />
    <circle cx="50" cy="90" r="2" fill="url(#letterGradientU)" className="letter-accent" />
  </svg>
)

const LetterS = () => (
  <svg viewBox="0 0 100 100" className="letter-svg letter-s-special">
    <defs>
      <linearGradient id="letterGradientS" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" />
        <stop offset="50%" stopColor="#00ff88" />
        <stop offset="100%" stopColor="currentColor" />
      </linearGradient>
    </defs>
    <path d="M75 30 Q75 20 60 20 L40 20 Q25 20 25 30 Q25 40 40 45 L60 50 Q75 55 75 65 Q75 80 60 80 L40 80 Q25 80 25 70" 
          stroke="url(#letterGradientS)" 
          strokeWidth="6" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="letter-path s-path" />
    <circle cx="30" cy="25" r="3" fill="url(#letterGradientS)" className="letter-accent s-accent-1" />
    <circle cx="70" cy="75" r="3" fill="url(#letterGradientS)" className="letter-accent s-accent-2" />
    <circle cx="50" cy="50" r="2" fill="url(#letterGradientS)" className="letter-accent s-accent-3" />
  </svg>
)

export default function AnitusIntro({ animate = true }) {
  const ref = useRef()
  const [mount, handleMount] = useState(true); // Start visible
  const [modernWave, setModernWave] = useState(false);
  const [finalReveal, setFinalReveal] = useState(false);
  
  useEffect(() => {
    // Ensure immediate visibility
    handleMount(true);
    
    // Modern wave effect
    setTimeout(() => {
      setModernWave(true);
    }, 500);
    
    // Final reveal with synchronized glow
    setTimeout(() => {
      setFinalReveal(true);
    }, 1000);
  }, []);

  // respect prefers-reduced-motion and allow disabling via prop
  const [reducedMotion, setReducedMotion] = useState(false)
  useEffect(() => {
    try {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
      const handler = () => setReducedMotion(mq.matches)
      handler()
      mq.addEventListener ? mq.addEventListener('change', handler) : mq.addListener(handler)
      return () => mq.removeEventListener ? mq.removeEventListener('change', handler) : mq.removeListener(handler)
    } catch (e) {
      // ignore on older browsers
    }
  }, [])

  const noAnimate = !animate || reducedMotion

  return (
    <div ref={ref} className={`mk-anitus-intro-modern ${mount ? 'mk-anitus-intro-visible' : ''} ${modernWave ? 'mk-anitus-modern-wave' : ''} ${finalReveal ? 'mk-anitus-final-reveal' : ''} ${noAnimate ? 'mk-anitus-intro-no-animate' : ''}`}>
      <div className="modern-background-grid">
        <div className="grid-line grid-line-1"></div>
        <div className="grid-line grid-line-2"></div>
        <div className="grid-line grid-line-3"></div>
        <div className="grid-dot grid-dot-1"></div>
        <div className="grid-dot grid-dot-2"></div>
        <div className="grid-dot grid-dot-3"></div>
      </div>
      <div className="letters-container">
        <SvgWrapper className="mk_svg_A">
          <LetterA />
        </SvgWrapper>
        <SvgWrapper className="mk_svg_N">
          <LetterN />
        </SvgWrapper>
        <SvgWrapper className="mk_svg_I">
          <LetterI />
        </SvgWrapper>
        <SvgWrapper className="mk_svg_T">
          <LetterT />
        </SvgWrapper>
        <SvgWrapper className="mk_svg_U">
          <LetterU />
        </SvgWrapper>
        <SvgWrapper className="mk_svg_S">
          <LetterS />
        </SvgWrapper>
      </div>
      <div className="modern-glow-overlay"></div>
    </div>
  )
}