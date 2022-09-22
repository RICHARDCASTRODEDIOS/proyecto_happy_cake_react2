import React from 'react'
import imagen from '../assets/img/tartadecumpleaños.jpg'


export default function Home() {
  return (
<div className="card">
  <h1 className='card-h1'>Bienbenido a <strong>Happy Cake</strong></h1>
  <h5 className='card-h5'>El lugar de los pasteles felices</h5>
  <img className='imagen' src={imagen} alt="..."/>
  <div className="card-body">
   {/* <button className='button-home'>Enviar</button> */}
  </div>
</div>
  )
}
