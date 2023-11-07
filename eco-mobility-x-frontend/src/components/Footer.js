import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <h3 className="footer-heading">Información de Contacto</h3>
          <p>Dirección: Tlalpan, Ciudad de México, México</p>
          <p>Email: jbarajas.fig@gmail.com</p>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Enlaces Útiles</h3>
          <ul className="footer-links">
            <li><a href="https://github.com/jebarfig21/">Inicio</a></li>
            <li><a href="https://github.com/jebarfig21/">Acerca de Nosotros</a></li>
            <li><a href="https://github.com/jebarfig21/">Contacto</a></li>
          </ul>
        </div>
      </div>
      <hr className="footer-divider" />
      <p className="footer-copyright">&copy; 2023 UCamp, Proyecto 5 Restaurante React.</p>
    </footer>
  );
}

export default Footer;