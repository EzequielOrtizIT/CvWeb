import React from 'react';
import './Home.css'; // si no tienes estilos aún, puedes comentar esta línea

export default function Home() {
  return (
    <div className="home">
      <h1>¡Hola! Soy Ezequiel Ortiz</h1>
      <p>Bienvenido a mi portafolio IT.</p>
      <a href="/cv/CV_Ortiz.pdf">Descargar CV</a>
    </div>
  );
}