import React from 'react'
import Beams from './Beams';
function Background() {
  return (
     <div
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "120%",
        zIndex: 0,           
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >


  <Beams
    beamWidth={2.5}
    beamHeight={30}
    beamNumber={20}
    lightColor="#ffffff"
    speed={2}
    noiseIntensity={1.75}
    scale={0.2}
    rotation={30}
  />
</div>
  )
}

export default Background