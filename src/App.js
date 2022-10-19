import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// Components
import MiComponente from './components/MiComponente';

function holaMundo(nombre, edad) {
  var presentacion = (
  <div>
    <h2>Hola {nombre}</h2>
    <h3>Tienes {edad} anyos</h3>
  </div>
  );

  return presentacion;
}

function App() {
  let nombre = "Gonzalo Fuente";
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React testing
        </p>

        {holaMundo(nombre, 26)}

        <section className='componentes'>
          <MiComponente />  
        </section>        
        
      </header>
    </div>
  );
}

export default App;
