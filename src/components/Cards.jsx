import React from 'react'
import TiltedCard from './TiltedCard';

function Cards() {
  return (
    <div style={{ paddingLeft: "6rem",paddingRight: "6rem"}}  className='row g-1 d-flex justify-content-center align-items-center ' >
<div className="col-12 col-md-3  d-flex justify-content-center">
  <TiltedCard
    imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
    altText="Kendrick Lamar - GNX Album Cover"
    captionText="Kendrick Lamar - GNX"
    containerHeight="300px"
    containerWidth="300px"
    imageHeight="300px"
    imageWidth="300px"
    rotateAmplitude={12}
    scaleOnHover={1.2}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={
      <p className="tilted-card-demo-text">
        Kendrick Lamar - GNX
      </p>
    }
  />
</div>
<div className='col-12  col-md-3  d-flex justify-content-center'>
  <TiltedCard
    imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
    altText="Kendrick Lamar - GNX Album Cover"
    captionText="Kendrick Lamar - GNX"
    containerHeight="300px"
    containerWidth="300px"
    imageHeight="300px"
    imageWidth="300px"
    rotateAmplitude={12}
    scaleOnHover={1.2}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={
      <p className="tilted-card-demo-text">
        Kendrick Lamar - GNX
      </p>
    }
  />
</div>
<div className='col-12 col-md-3 col-lg-3 d-flex justify-content-center'>
  <TiltedCard
    imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
    altText="Kendrick Lamar - GNX Album Cover"
    captionText="Kendrick Lamar - GNX"
    containerHeight="300px"
    containerWidth="300px"
    imageHeight="300px"
    imageWidth="300px"
    rotateAmplitude={12}
    scaleOnHover={1.2}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={
      <p className="tilted-card-demo-text">
        Kendrick Lamar - GNX
      </p>
    }
  />
</div>
<div className='col-12 col-md-3  d-flex justify-content-center'>
  <TiltedCard
    imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
    altText="Kendrick Lamar - GNX Album Cover"
    captionText="Kendrick Lamar - GNX"
    containerHeight="300px"
    containerWidth="300px"
    imageHeight="300px"
    imageWidth="300px"
    rotateAmplitude={12}
    scaleOnHover={1.2}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={
      <p className="tilted-card-demo-text">
        Kendrick Lamar - GNX
      </p>
    }
  />
</div>

    </div>
  )
}

export default Cards