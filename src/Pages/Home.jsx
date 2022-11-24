import React from 'react'
import NavBar from '../Components/NavBar'

import "../Style/Home.css"

export default function Home() {
  return (
    <div className='Home-container'>
      <div className="home lefth-side">
      </div>
      <div className="home right-side">
        <div className="vertical">
          <div className='Home-NavBar'>
          <NavBar />
          </div>
        </div>
          <span className='Portifolio'>Portifolio</span>
        <div className='Description'>
          <spam>Oelinton Araujo</spam>
          <spam className="cargo">Desenvolvedor Fron-end</spam>
        </div>
      </div>
    </div>
  )
}
