import { Link } from "react-router-dom";

import React from 'react'

const Navbar = () => {
  return (

    
    <nav className="navbar navbar-expand-lg bg-ligh">
      {/* <div class="container-fluid"> */}
    
        <div className="links">
          <Link to="/" className="text-white ms-3 text-decoration-none">🏠Home</Link>
          <Link to="/Contacto" className="text-white ms-3 text-decoration-none">📒Contacto</Link>
        </div>

        <div>
        <Link to="/" className="navbar-brand">Happy Cake 🍰</Link>
        </div>
    </nav>
  )
}

export default Navbar