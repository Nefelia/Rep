import React from 'react';
import './App.css';
import Header from './componentes/header';
import section from './componentes/section';
import Footer from './componentes/footer';

function App() {
  return (
    <div className="App">
      <header />
      <main>
        <section id="home" title='Home'>
          <p>Bienvenido a neustra página de inicio</p>
        </section>
        <section id="about" title='About'>
          <p>Información sobre nosotros.</p>
        </section>
        <section id="services" title='Services'>
          <p>Detalles de nuestros servicios.</p>
        </section>
        <section id="contact" title='Contact'>
          <p>Información de contacto.</p>
        </section>
      </main>
      <footer /> 
    </div>
  );
}

export default App;
