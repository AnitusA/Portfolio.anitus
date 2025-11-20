import React from 'react'

// Simple wrapper that renders the SVG using img tag
export default function AnitusSVG(props) {
  return (
    <img 
      src="/assets/mk.svg" 
      alt="Anitus A" 
      style={{ width: '100%', height: '100%' }}
      {...props} 
    />
  )
}
