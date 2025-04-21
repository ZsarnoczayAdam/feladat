import logo from './logo.svg';
import './App.css';
import SubComponent from './SubComponent';
import { Link } from 'react-router-dom';


function App() {
  return <>
    <div>
      <nav>
        <Link to={"/new-empanada"}>Uj letrehozas</Link><br />
        <Link to={"/fetch-example"}>Empanadak lekerese</Link>
      </nav>
    </div>
  </>
}

export default App;
