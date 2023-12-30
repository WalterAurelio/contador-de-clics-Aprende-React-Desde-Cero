import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
// freeCodeCampLogo es el nombre que le doy a la variable que contiene a la imagen importada.

function App() {
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
        />
      </div>
    </div>
  );
}

export default App;
