import {useState} from 'react';
import './App.css';
import html2canvas from 'html2canvas';


function App() {

  {/*var nombre="Lucas";
  var saludo=<p>Hola mundo soy {nombre}<br/>
      Edit <code>src/App.js</code> and save to reload.
</p>*/}


  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 =function(evento) {
    setLinea1(evento.target.value);
  }

  const onChangeLinea2 =function(evento) {
    setLinea2(evento.target.value);
  }

  const onChangeImagen =function(evento) {
    setImagen(evento.target.value);
  }

  const onClickExportar =function(evento) {
    //alert("EXPORTAR");
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img    = canvas.toDataURL("image/png");
      document.write('<img src="'+img+'"/>');
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
  });
  }

  return (
     //Select Picker de memes
      //Input Text - Primer Linea
      //Input Text - Segunda Linea
      //Boton exportar
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select><br/>
    
                       
      <input onChange={onChangeLinea1} type="text" placeholder="linea 1" /> <br/>
      <input onChange={onChangeLinea2} type="text" placeholder="linea 2" /> <br/>
      <button onClick={onClickExportar}>Exportar</button>


      <div className="meme" id="meme">
        <span>{linea1}</span> <br/>
        <span>{linea2}</span>
        <img src={"/img/"+imagen+".jpg"}/>
      </div>
     {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {saludo}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
     
    </div>
  );
}

export default App;
