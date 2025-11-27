import React from 'react'
import ScrollVelocity from './ScrollVelocity';

function TextScroll() {
  return (
<div style={{color:"#424242ff"}} className="text-white mt-5 mb-5 fw-bolder responsive-pad">
  <ScrollVelocity 
    texts={['🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤']} 
    velocity={25} 
    className="custom-scroll-text"
  />
</div>

  )
}

export default TextScroll