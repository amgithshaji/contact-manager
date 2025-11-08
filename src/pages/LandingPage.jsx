import React from 'react'
import { Link } from 'react-router-dom'
function LandingPage() {
  return (
    <div className='text-center' >
 <h1>this is my landing page on progress</h1>
<Link to={'contact'} className='btn btn-danger text-white ' > lets get started </Link>

    </div>
  )
}

export default LandingPage