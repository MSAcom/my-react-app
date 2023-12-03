import Header from "./component/header";
import Section from "./component/section";
import Menu from "./images/menu.png";
import Slider from "./component/slider";
import Jerome from "./images/jerome.jpg";
import Caroussel from "./component/caroussel";
import Footer from "./component/footer";


//accolades pour avoir accès à une partie du fichier 
//sans pour tout prendre 

const content1 = {h2: "Menu", p : "À l'affiche, des ingrédients premium, sain et fraichement cueillis afin de raviver vos papilles au travers de mélange harmonieux et savoureux. Venez découvrir le menu de Jerome Billings. Une expérience culinaire à ne surtout pas rater car vous ne le regreteriez pas." }
const content2 = {h2: "Jerome Billings", p : "Jerome Billings dirige l'équipe de Qyru et s'adonne tout particuliairement à la cuisine moléculaire depuis très longtemps. Sa maitrise des éléments et des réactions chimiques lui permet de vous amenez vers un univers culinaire des plus particuliers." }
function App() {
  
  return (
    <div className="App">
      <Header />
      <main>
        <Section content={content1} image={Menu} background={"#edd8996d"} isReverseColumn={true} />
        <Section content={content2} image={Jerome} background={"#b9caa98d"} isReverseColumn={true} isReverseRow={true} />
        <Caroussel/>
      </main>
      <Footer/>
      
  
      
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