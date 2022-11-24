import React from 'react'


import "../Style/ProjectCard.css"

import Clock from './Clock'

export default function CardProjetos(props) {
  return (
    <div className='projectCard'>
      < Clock />
      <a 
      href='https://30-projetos-em-30-dias-css-html.vercel.app'
      >
        {props.projectName}
      </a>
    </div>
  )
}
