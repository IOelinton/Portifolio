import React from 'react'
import NavBar from '../Components/NavBar'
import { Tooltip } from '@mui/material';

import "../Style/Sobre.css"
import foto from '../imgs/foto.jpeg';

import { FaCss3Alt,FaDocker, FaGithub, FaHtml5, FaReact, FaSlack, FaTrello, FaCodeBranch,FaCode,
} from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai"
import { DiJavascript } from "react-icons/di"

export default function Sobre() {
  const FastEditionTooltip = {
    fontSize: "17px",
    padding: "4px",
    };
  return (
    <div className='container-sobre'>
      <div className=' left-side sobre'>
        <img className="foto" src={ foto } alt="foto oelinton"/>
      </div>
      <div className='Right-side sobre '>
        <div className='NavBar-sobre'>
        <NavBar /> 
        </div>

        <div className='resumo'>
        <span className='Apresentacao'> <FaCode /> Oi, me chamo Oelinton :)</span>
        <p>
          Sou um desenvolvedor Front-End júnior trabalhando para entender melhor como as interfaces e experiências gráficas (UI e UX), motivam e moldam o comportamento dos usuários. Tenho experiência na área da gastronomia, aonde aprendi a importância do visual para fidelizar o consumidor final, a importância de uma boa comunicação e trabalho em equipe para desenvolver um produto(SCRUM e KANBAN) e resiliência para trabalhar em um ambiente de extrema pressão.
        </p>
        <p>
          Descobri uma paixão pela biblioteca de JavaScript conhecida por REACT JS, aonde me abriu os olhos para as infinitas possibilidades desta tecnologia.
        </p>
        <div className="tecnologias">
          <span> As tecnologias que domino atualmente sao:</span>
          <div className='icons'>
            <Tooltip title={<span style={FastEditionTooltip}> JavaScript </span>}>
              <span>
                <DiJavascript />
              </span>
            </Tooltip>
            <Tooltip title={<span style={FastEditionTooltip}> CSS3 </span>}>
              <span>
                <FaCss3Alt />
              </span>
            </Tooltip>
            <Tooltip title={<span style={FastEditionTooltip}> Html5 </span>}>
              <span>
                <FaHtml5 />
              </span>
            </Tooltip>
            <Tooltip title={<span style={FastEditionTooltip}> Docker </span>}>
              <span>
                <FaDocker />
              </span>
            </Tooltip>
            <Tooltip title={<span style={FastEditionTooltip}> GitHub </span>}>
              <span>
                <FaGithub />
              </span>
            </Tooltip>
            <Tooltip title={<span style={FastEditionTooltip}> Versionamento de codigo </span>}>
              <span>
                <FaCodeBranch />
              </span>
            </Tooltip>
            <Tooltip title={<span style={FastEditionTooltip}> React </span>}>
              <span>
                <FaReact />
              </span>
            </Tooltip>
            <Tooltip title={<span style={FastEditionTooltip}> Slack 'SCRUN' </span>}>
              <span>
                <FaSlack />
              </span>
            </Tooltip>
            <Tooltip title={<span style={FastEditionTooltip}> Trello 'KANBAN' </span>}>
              <span>
                <FaTrello />
              </span>
            </Tooltip>
            <Tooltip title={<span style={FastEditionTooltip}> SQL </span>}>
              <span>
                <AiOutlineConsoleSql />
              </span>
            </Tooltip>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
