import React from 'react'
import NavBar from '../Components/NavBar'

import "../Style/Projetos.css"

export default function Projetos() {
  return (
    <section className="body-projetos">
      <div className="NavBar-projeto">
        <NavBar />
      </div>
      <div className='container-projetos'>
        <div className='projeto'>
          <span>30 dias 30 elementos</span>
        </div>
        <div className='projeto'>
          <span>30 dias 30 elementos</span>
        </div>
      </div>
    </section>
  )
}
