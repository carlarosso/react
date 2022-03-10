import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards/Cards';


function App() {
    return (
    
    <div className = "App" >
        <header className = "App-header" >
            <NavBar />
        </header>

        <body className='bodyApp'>
            <ItemListContainer titulo="¡Welcome!" saludo="¿What combo are you craving today?" />

            <Cards titleCard="El Argento" cardImg={process.env.PUBLIC_URL + "/el-argento.jpg"} />

            <Cards titleCard="Marie Antoinette" cardImg={process.env.PUBLIC_URL + "/marie-antoinette.jpg"} />

            <Cards titleCard="Willy Wonka" cardImg={process.env.PUBLIC_URL + "/willy-wonka.jpg"} />
            
        </body>

        
        
    </div>
         
         )
};

export default App;

