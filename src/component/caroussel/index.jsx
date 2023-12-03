import { useEffect, useState } from "react"; 
import "./index.css";

const Caroussel = () => {
        const [index, setIndex] = useState(0) //gère l'index de l'image affichée
        
        const handleTab = (newImagesIndex) => {
        setIndex(newImagesIndex)
        }
        useEffect(() => { //change image toute les 5s 
            let interval;
            let currentIndex = index;
        interval = setInterval(() => {
            handleTab(++currentIndex % 3)
        }, 5000);
            
            return () => {clearInterval(interval) };
        },
        [])
        
        const images = [ 
            '/assets/images/img-0.jpg',
            '/assets/images/img-1.jpg',
            '/assets/images/img-2.jpg'
        ]
    return (
        <div className="caroussel">  
            {images.map((image, i) => {  // .map pour parcourir // ? = si // alt = si jamais image ne peut pas s'afficher
                return <img className={index == i ? 'active' : ""} style={index == i ? { opacity: 1, transition: "0.5s ease"} : {opacity:0, transition: "0.5s ease"}} src={image} key={i} alt={image + index} />
            })}
       </div>
   )
}



export default Caroussel;




// Méthode 2
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