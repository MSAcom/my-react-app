import './index.css'

function Paragraphe ({texte, titre}) {
    return (
        <div className='page'>

        <div><p  className='titre-para'>{titre}</p></div>
           
        <div><p className='texte'>{texte}</p></div>
        
        </div>
    )
  
}

export default Paragraphe;