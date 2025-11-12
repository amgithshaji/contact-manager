import React from 'react'
import RotatingText from './RotatingText'

function TextRotating() {
  return (
    <RotatingText
  texts={['Delete', 'Update', 'Connect']}
  mainClassName="text-black"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>
  )
}

export default TextRotating