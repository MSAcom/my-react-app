import Header from "./component/header";
import Section from "./component/section";
//accolades pour avoir accès à une partie du fichier 
//sans pour tout prendre 

const content = {h2: "Menu", p : "lorem ipsum dolores lorem ipsum dolores lorem ipsum dolores lorem ipsum dolores lorem ipsum dolores" }
function App() {
  return (
    <div className="App">
      <Header/>
 <main>
        <Section content={content} image={'/images/menu.png'} background={"#D5DDDB"} isReverseColumn={false} />
        <Section content={content} image={'/images/helene.png'} background={"#EEEEEE"} isReverseColumn={false} isReverseRow={true} />
        
      </main>
      
  
      
      <script src="https://kit.fontawesome.com/11dfd8b97e.js" crossorigin="anonymous"></script>
    </div>
  )
}

export default App;


/* <div className="page">
        
        <div className="premierepage">
          <Page className='pageimg'  fond = {restaurant} titre='bonjour' text={imageaccueil} petittext={petitlogo}></Page>
          
        </div>
        
        <div className="deuxiemepage">
          <Page className='pageimg'  fond = {menu}></Page>
          <Paragraphe texte='rnon' titre='bbiuvuuyfy'></Paragraphe>
        </div>
        <div className="troisiemepage">
          <Page className='pageimg'  fond = {helene}></Page>
          <Paragraphe texte='rnon' titre='bbiuvuuyfy'><p>ndizndin</p></Paragraphe>

         
        </div>
        
      
      </div>
      */