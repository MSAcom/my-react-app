import './index.css'


function Page ({text, petittext}) {
    
    return (
        <div className='page' >
             <div className='titre'><img src={text} /></div>
             <div className='petit-titre'><img src={petittext} /></div>
             </div>
        
    )
  
}

export default Page;
