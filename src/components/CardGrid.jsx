import React from 'react'
import MagicBento from './MagicBento'

function CardGrid() {
  return (
    // <div>CardGrid</div>
    <MagicBento 
  textAutoHide={true}
  enableStars={true}
  enableSpotlight={true}
  enableBorderGlow={true}
  enableTilt={true}
  enableMagnetism={true}
  clickEffect={true}
  spotlightRadius={300}
  particleCount={12}
  glowColor="132, 0, 255"
/>
  )
}

export default CardGrid
