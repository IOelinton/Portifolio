import React from 'react'
import { Link } from 'react-router-dom'

import "../Style/Navbar.css"

export default function NavBar() {
  return (
    <div className='Container-nav'>
      <nav> 
      <Link to='/'>
      <span className='Home'>Home</span>
      </Link>
      <Link to='/Sobre'>
      <span className='Sobre'>Sobre</span>
      </Link>
      <Link to='/Projetos'>
      <span className='Projetos'>Projetos</span>
      </Link>
      <Link to='/Contato'>
      <span className='Contato'>Contato</span>
      </Link>
    </nav>
    </div>
  )
}
