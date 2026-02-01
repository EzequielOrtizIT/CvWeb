import React from 'react';
import './Navbar.css'; // tu CSS específico

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="logo">Eze O</a>
      <ul className="menu">
        <li><a href="/">Inicio</a></li>
        <li><a href="/experiencia">Experiencia</a></li>
        …etc…
      </ul>
    </nav>
  );
}