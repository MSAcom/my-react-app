
import Header from "./component/header";
import Paragraphe from "./component/paragraphe";
import Page from "./component/page";
import dessert from './images/dessert.jpg';
import helene from './images/helene.png';
import restaurant from './images/image-accueil.jpg';
import plat from './images/delicious-gourmet-food-600nw-218817064.webp';
import menu from './images/menu.png';
import imageaccueil from './images/qyru-accueil-removebg-preview (1).png'
import petitlogo from './images/logo2-0-sans-fond.png'
import Section from "./component/section";
//accolades pour avoir accès à une partie du fichier 
//sans pour tout prendre 

const content = {h2: "Menu", p : "lorem ipsum dolores lorem ipsum dolores lorem ipsum dolores lorem ipsum dolores lorem ipsum dolores" }
function App() {
  return (
    <div className="App">
      <Header />
      
 <main>
        <Section content={content} image={menu} background={"#D5DDDB"} isReverseColumn={false} />
        <Section content={content} image={helene} background={"#EEEEEE"} isReverseColumn={false} isReverseRow={true} />
        
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