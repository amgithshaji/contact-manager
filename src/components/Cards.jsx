import React from 'react'
import TiltedCard from './TiltedCard';

function Cards() {
  return (
    <div style={{ paddingLeft: "6rem",paddingRight: "6rem",marginBottom:"100px"}}  className='row g-1 d-flex justify-content-center align-items-center ' >
<div style={{marginBottom:"100px"}} className='col-12 col-md-3  d-flex justify-content-center'>
  <TiltedCard
    imageSrc="https://i.pinimg.com/1200x/2b/5c/c0/2b5cc004fdaa0749db2dbc1ea253e7aa.jpg"
    altText=""
    captionText="CONNECT"
    containerHeight="300px"
    containerWidth="300px"
    imageHeight="400px"
    imageWidth="300px"
    rotateAmplitude={12}
    scaleOnHover={1.2}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={
      <p className="tilted-card-demo-text">
        
      </p>
    }
  />
</div>
<div style={{marginBottom:"100px"}}   className='col-12 col-md-3  d-flex justify-content-center'>
  <TiltedCard
    imageSrc="https://i.pinimg.com/736x/d0/80/34/d08034d8194ba3c53271b3c6560be7c3.jpg"
    altText="Kendrick Lamar - GNX Album Cover"
    captionText="CONNECT"
    containerHeight="300px"
    containerWidth="300px"
    imageHeight="400px"
    imageWidth="300px"
    rotateAmplitude={12}
    scaleOnHover={1.2}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={
      <p className="tilted-card-demo-text">
        
      </p>
    }
  />
</div>
<div style={{marginBottom:"100px"}}  className='col-12 col-md-3 d-flex justify-content-center'>
  <TiltedCard
    imageSrc="https://i.pinimg.com/1200x/b9/2c/db/b92cdb55394a607846a951de8fe27f3e.jpg"
    altText="Kendrick Lamar - GNX Album Cover"
    captionText="CONNECT"
    containerHeight="300px"
    containerWidth="300px"
    imageHeight="400px"
    imageWidth="300px"
    rotateAmplitude={12}
    scaleOnHover={1.2}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={
      <p className="tilted-card-demo-text">
        
      </p>
    }
  />
</div>
<div style={{marginBottom:"100px"}}  className='col-12 col-md-3  d-flex justify-content-center'>
  <TiltedCard
    imageSrc="https://i.pinimg.com/736x/0b/c6/41/0bc641cc9ac13a101e5411eb4cdb2648.jpg"
    altText="Kendrick Lamar - GNX Album Cover"
    captionText="CONNECT"
    containerHeight="300px"
    containerWidth="300px"
    imageHeight="400px"
    imageWidth="300px"
    rotateAmplitude={12}
    scaleOnHover={1.2}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={
      <p className="tilted-card-demo-text">
        
      </p>
    }
  />
</div>

    </div>
  )
}

export default Cards