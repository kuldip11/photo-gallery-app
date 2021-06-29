import React from 'react'

const PhotoCard  = ({image, key}) => {
    return (
        <div 
            className="Card"
            key={key}>
            <img src= {image} />
            
        </div>
    )
}

export default PhotoCard;
