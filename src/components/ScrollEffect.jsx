import React from 'react'
import ScrollFloat from './ScrollFloat';
function ScrollEffect() {
  return (
    <ScrollFloat
  animationDuration={1}
  ease='back.inOut(2)'
  scrollStart='center bottom+=50%'
  scrollEnd='bottom bottom-=40%'
  stagger={0.03}
>
<div>
  
  <h1 className='fw-bolder' style={{ fontSize: "clamp(18px, 6vw, 70px)" ,color:"#424242ff"}}>
    How Our Platform <br />
    Makes Your Work Easier.
  </h1>
</div>
</ScrollFloat>

  )
}

export default ScrollEffect