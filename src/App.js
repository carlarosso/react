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

            <Cards />
        </body>

        

    </div>
         
         )
};

export default App;

