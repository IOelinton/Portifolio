import React from 'react'
import CardProjetos from '../Components/CardProjetos'
import Clock from '../Components/Clock'
import NavBar from '../Components/NavBar'

import "../Style/Projetos.css"

export default function Projetos() {

  const projectNames = ['Desafio 30 dias 30 projetos',];

  const LinkProject = <span className='Name'> 
    {projectNames[0]}
  </span>

  return (
    <section className="body-projetos">
      <div className="NavBar-projeto">
        <NavBar />
      </div>
      <div className='container-projetos'>
        <div className='projeto'>
          <CardProjetos projectName={LinkProject}>
            <Clock />
          </CardProjetos>
        </div>
      </div>
    </section>
  )
}
