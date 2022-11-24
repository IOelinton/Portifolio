import React from 'react'
import NavBar from '../Components/NavBar'

import "../Style/Sobre.css"
import foto from '../imgs/foto.jpeg';

export default function Sobre() {
  console.log("oooo")
  return (
    <div className='container-sobre'>
      <div className=' left-side'>
        <img className="foto" src={ foto } alt="foto oelinton"/>
      </div>
      <div className='Right-side'>
        <div className='NavBar-sobre'>
        <NavBar /> 
        </div>
        <span className='Apresentacao'>Oi, me chamo Oelinton :)</span>

        <div className='resumo'>
        <p>
          Sou um desenvolvedor Front-End júnior trabalhando para entender melhor como as interfaces e experiências gráficas (UI e UX), motivam e moldam o comportamento dos usuários. Tenho experiência na área da gastronomia, aonde aprendi a importância do visual para fidelizar o consumidor final, a importância de uma boa comunicação e trabalho em equipe para desenvolver um produto(SCRUM e KANBAN) e resiliência para trabalhar em um ambiente de extrema pressão.
        </p>
        <p>
          Descobri uma paixão pela biblioteca de JavaScript conhecida por REACT JS, aonde me abriu os olhos para as infinitas possibilidades desta tecnologia.
        </p>
        </div>
      </div>
    </div>
  )
}
