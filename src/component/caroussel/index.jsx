import { useEffect, useState } from "react";
import "./index.css";

const Caroussel = () => {
    const [index, setIndex] = useState(0)
    
    const handleTab = (newImagesIndex) => {
    setIndex(newImagesIndex)
}
    useEffect(() => {
        let interval;
        let currentIndex = index;
      interval = setInterval(() => {
        handleTab(++currentIndex % 3)
      }, 5000);
        
        return () => clearInterval(interval)
    }, [])
    
    const images = [
        '/assets/images/img-0.jpg',
        '/assets/images/img-1.jpg',
        '/assets/images/img-2.jpg'
    ]
    return (
        <div className="caroussel">
            {images.map((image, i) => {

                return <img className={index == i ? 'active' : ""} style={index == i ? { opacity: 1, transition: "0.5s ease"} : {opacity:0, transition: "0.5s ease"}} src={image} key={i} alt={image + index} />
            })}
       </div>
   )
}



export default Caroussel;




// Méthode 1
/*
 const [index, setIndex] = useState(0)
    const [autoplay, setAutoplay] = useState(true)

    const handleTab = (i) => {
    setIndex(i)
    }

    
    useEffect(() => {
        //le code
        let interval;
        let currentIndex = index
        if (autoplay) {
        interval = setInterval(() => handleTab(++currentIndex % 3), 5000)
        }
         return () => clearInterval(interval)
    }, [])
    
    return (
        <div className="caroussel">
            <img  src={`/assets/images/img-${index}.jpg`}/>
        </div>
    )
    */