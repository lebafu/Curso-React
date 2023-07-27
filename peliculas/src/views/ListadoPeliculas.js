import logo from './logo.svg';
import '../App.css';
import PageWrapper from './PageWrapper';
import Pelicula from '../Pelicula';
import peliculasJson from '../peliculas.json';
import Paginacion from './Paginacion.js';
import React, { useEffect, useState } from 'react';

function ListadoPeliculas() {
  const [paginaActual, setPaginaActual] = useState(1);
  const TOTAL_POR_PAGINA = 7;
  const peliculas = peliculasJson;

  useEffect(() => {
    buscarPeliculas();
  }, []);

  const buscarPeliculas = async () => {
    let url = "https://lucasmoy.dev/data/react/peliculas.json";

    try {
      let respuesta = await fetch(url, {
        "method": 'GET',
        "headers": {
          "Accept": 'application/json',
          "Content-Type": 'application/json',
          "Origin": 'https://lucasmoy.dev'
        }
      });
      let json = await respuesta.json();
      alert(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

 
  const getTotalPaginas = () => {
    let cantidadTotalDePeliculas = peliculasJson.length;
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
  }

  let peliculasPorPagina = peliculas.slice(
    (paginaActual - 1) * TOTAL_POR_PAGINA,
    paginaActual * TOTAL_POR_PAGINA
  );


  return (
    <PageWrapper>
      {peliculasPorPagina.map(pelicula =>
        <Pelicula
          titulo={pelicula.titulo}
          calificacion={pelicula.calificacion}
          director={pelicula.director}
          actores={pelicula.actores}
          fecha={pelicula.fecha}
          duracion={pelicula.duracion}
          img={pelicula.img}
        >
          {pelicula.descripcion}
        </Pelicula>
      )}
      <Paginacion
        pagina={paginaActual}
        total={getTotalPaginas()}
        onChange={(pagina) => {
          setPaginaActual(pagina);
        }}
      />
    </PageWrapper>
  );
}

export default ListadoPeliculas;
