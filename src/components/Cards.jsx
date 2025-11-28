import React from 'react'
import TiltedCard from './TiltedCard';

function Cards() {
  return (
    <div style={{ paddingLeft: "6rem",paddingRight: "6rem",marginBottom:"100px"}}  className='row  d-flex justify-content-center g-5 align-items-center ' >
<div style={{marginBottom:"80px",marginTop:"80px"}} className='col-12 col-md-3  d-flex justify-content-center'>
  <TiltedCard
    imageSrc="card1.jpg"
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
<div style={{marginBottom:"80px",marginTop:"80px"}}   className='col-12 col-md-3  d-flex justify-content-center'>
  <TiltedCard
    imageSrc="card2.jpg"
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
<div style={{marginBottom:"80px",marginTop:"80px"}}  className='col-12 col-md-3 d-flex justify-content-center'>
  <TiltedCard
    imageSrc="/card3.jpg"
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
<div style={{marginBottom:"80px",marginTop:"80px"}}  className='col-12 col-md-3  d-flex justify-content-center'>
  <TiltedCard
    imageSrc="card4.jpg"
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