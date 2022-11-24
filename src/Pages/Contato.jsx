import React from 'react'
import NavBar from '../Components/NavBar'
import { Tooltip } from '@mui/material';

import "../Style/Contato.css"

import {
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiFillGithub,
  AiFillCodepenCircle
} from 'react-icons/ai';

export default function Contato() {
  const FastEditionTooltip = {
    fontSize: "17px",
    padding: "4px",
    };
  return (
    <section className='body-contato'>
      <div className='NavBar-contato'>
        <NavBar />
      </div>
    <div className='container-contato'>
      <span className='name'>Oelinton Araujo</span>
      <div className='square'></div>
      <div className="Contatos">
        <div>
          <Tooltip title={<span style={FastEditionTooltip}> Linkedin</span>}>
            <span>
              <a href='https://www.linkedin.com/in/oelinton/'>
                <AiFillLinkedin/>
              </a>
            </span>
          </Tooltip>
          <Tooltip title={<span style={FastEditionTooltip}> whatsapp </span>}>
          <span>
            <a href='https://api.whatsapp.com/send?phone=5554997029318'>
              <AiOutlineWhatsApp/>
            </a>
          </span>
          </Tooltip>
        </div>
        <div>
        <Tooltip title={<span style={FastEditionTooltip}> GitHub </span>}>
          <span>
            <a href='https://github.com/IOelinton'>
              <AiFillGithub/>
            </a>
          </span>
        </Tooltip>
        <Tooltip title={<span style={FastEditionTooltip}> CodePen </span>}>
          <span>
            <a href='https://codepen.io/Oelinton'>
            <AiFillCodepenCircle/>
            </a>
          </span>
        </Tooltip>
        </div>
      </div>
      <span className='telefone'>(54)997029318</span>
    </div>
    </section>
  )
}
