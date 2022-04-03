import React from 'react'

function ThumbNail({video}) {
  
  return (
    <div className=' ThumbNail-item row row-cols-2' >
    
        <h3 className=''>{video.title}</h3>
        <img
        src={video.thumbnail}
        className='img-fluid shadow-2-strong '
        alt='...'
        style={{ maxWidth: '24rem' }}
        />
    </div>
    
  )
}

export default ThumbNail