import "./slideshow.scss"
import { useState } from "react"

const Slideshow = (images) => {

    const [imageLocation, setImageLocation] = useState(0);
    const maxIndex = images.images.length - 1;

    const transitionImage = (moveImageDirection)=> {
        const newImageLocation = imageLocation + moveImageDirection;
        console.log(newImageLocation)
        if(newImageLocation > maxIndex) {
            setImageLocation(0);
        }
        else if (newImageLocation < 0) {
            console.log(maxIndex)
            setImageLocation(maxIndex);
        }
        else (setImageLocation(imageLocation + moveImageDirection))
    }
    
    return (
        <div className={"slideshow--outer-container"}>
            <img className={"slideshow--current-image"} src={images.images[imageLocation]} alt={`slideshow image ${0}`}/>
            <button onClick={()=>transitionImage(-1)} className={"slideshow--navigation-button"}>&#60;</button>
            <button onClick={()=>transitionImage(1)} className={"slideshow--navigation-button"}>&#62;</button>
        </div>
    )
}

export default Slideshow;