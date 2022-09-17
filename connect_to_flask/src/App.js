import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import HelloWorld from './components/HelloWorld';
import Sumar from './components/Sumar';

function App() {

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Hello World</Link>
          </li>
          <li>
            <Link to="/calculadora/sumar">Sumar Numeros</Link>
          </li>
        </ul>
        <div className="tiki">
          <Routes>
            <Route exact path='/' element={<HelloWorld />}></Route>
            <Route exact path='/calculadora/sumar' element={<Sumar />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );

}

export default App;
