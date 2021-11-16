import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav.js';
import ItemList from './ItemList';
import {data} from './data';

function App() {
  return (
  <>
  <header>
    <Nav/>
  </header>

  <body>
    
  <ItemList Products={data}/>


  </body>
  <footer>
  
  </footer>
  </>
  );
}

export default App;
