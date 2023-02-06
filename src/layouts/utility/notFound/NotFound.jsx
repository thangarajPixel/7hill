import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Image from "../../../assets/images/18-dark.png"
const NotFound = () => {
  return (
    <div className='flex-center m-5'>
        <LazyLoadImage src={Image} alt="" className='img-fluid w-20-rem h-22-rem'/>
    </div>
  )
}

export default NotFound