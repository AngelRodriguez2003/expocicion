import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        <label for="fname">Usuario:</label>
        <input type="text" id="fname" name="fname" />
        <label for="lname">Contraseña:</label>
        <input type="password" id="lname" name="lname" />
        <label for="lname">Color:</label>
        <input type="color" id="lname" name="lname" />
        <label for="lname">sexo:</label>
        <div>

          <input type="radio" id="lname" name="hombre" placeholder='hombre' />
          <label for="lname">mujer:</label>
        </div>
        <div>
          <input type="radio" id="lname" name="mujer" placeholder='mujer' />
          <label for="lname">hombre:</label>

        </div>




        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" />
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default App;
