import React, { useContext, useState } from 'react'
import { photoContext } from '../Router/NaveBar'
import "./style.css"

const Home = () => {

    const [photo, setPhoto] = useContext(photoContext)
    const [image, setImage] = useState(null)
    const uploadHandler = () => {
        setPhoto([...photo, image])
        setImage("")
        console.log(photo)
    }
    const imageHandler = (e) => {
        setImage(e.target.value)
    }

    return (
        <div className="home">
            <h6>choose photo to upload</h6>
            <form style={{display:"flex",flexDirection:"column"}}>
                <input 
                    type="file"
                    accept="image/png, .jpeg, .jpg"
                    onChange={imageHandler}
                />
                <button 
                    onClick={uploadHandler} 
                    className="btn"
                    >
                    Upload
                </button>
            </form>
        </div>
    )
}

export default Home
