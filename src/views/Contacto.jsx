import React from 'react'

export default function Contacto() {
  return (
    <div className='container-contacto'>
      <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
      <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Correo:</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Descripción</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <button className='button-contacto'>Enviar</button>
</div>
    </div>
  )
}
