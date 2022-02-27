import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

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

