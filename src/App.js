import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
    return (
    
    <div className = "App" >
        <header className = "App-header" >
            <NavBar />
        </header>

        <body className='bodyApp'>
            <ItemListContainer />

        </body>

        
        
    </div>
         
         )
};

export default App;

