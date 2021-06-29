import React, { useContext } from 'react'
import { photoContext } from '../Router/NaveBar'
import PhotoCard from './PhotoCard'

const Gallery = () => {
    const [photo] =useContext(photoContext)
    return (
        <div className="gallery">
            {photo.map((item, indx) => (
                <PhotoCard image={item} key={indx}/>
            ))}
        </div>
    )
}

export default Gallery
