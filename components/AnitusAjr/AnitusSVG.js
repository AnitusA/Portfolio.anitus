import React from 'react'
import MkSvg from '../../../public/assets/mk.svg'

// Simple wrapper that renders the imported SVG file
export default function AnitusSVG(props) {
  // If the project setup doesn't support importing svg as component, fall back to img
  if (MkSvg && typeof MkSvg === 'string') {
    return <img src={MkSvg} alt="Anitus" {...props} />
  }
  const SvgComp = MkSvg
  return <SvgComp {...props} />
}
