import React from 'react'
import ScrollVelocity from './ScrollVelocity';

function TextScroll() {
  return (
    <div>
        <ScrollVelocity
  texts={['React Bits', 'Scroll Down']} 
  velocity={25} 
  className="custom-scroll-text"
/>

    </div>
  )
}

export default TextScroll