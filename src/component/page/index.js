import './index.css'

//import image_1 from '../../../../../../../projet/Hunter-X-Hunter-Tome-1.jpg'

function Page ({fond, text, petittext}) {
    const styleFond = fond ? { backgroundImage: `url(${fond})` } : {}; //met fond en background
    return (
        <div className='page' style={styleFond}>
             <div className='titre'><img src={text} /></div>
             <div className='petit-titre'><img src={petittext} /></div>
             </div>
        
    )
  
}

export default Page;
