import React from 'react'
import ThumbNail from './ThumbNail'
import { Link } from "react-router-dom";

function ThumbNails({filteredVideos}) {
  return (
    <div className='container'>
        <div className='row  row-cols-md-2 '>
        
        
            {filteredVideos.map(video=>{
            return  <Link to="/video" key={video.id} state={{ iframe:video.iframe}} style={{textDecoration:"none"}}><ThumbNail  video={video}  /></Link>;
            })}
        </div>
          
    </div>

   
  )
}

export default ThumbNails