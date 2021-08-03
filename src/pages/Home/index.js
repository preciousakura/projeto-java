import React from 'react'
import { Tabela, Selects, Grafico, Informacoes } from '../../components'
import { AiOutlineBorderlessTable } from "react-icons/ai";
import './style.css'

export function Home() {
  return(
    <div className='content'>
      <div className='header'>
        <div>
          <h1> <AiOutlineBorderlessTable/> INFORME-SE</h1>
          <p>Tabela com números de casos de COVID-19 confirmados por estado e por mês. </p>
        </div>
        <div class="menu">
          <span className="title">CARREGAR PLANILHA</span>
          <span className="title">/</span>
          <span className="title">INFORMAÇÕES DETALHADAS</span>
          <Selects/>
        </div>
      </div>
      <div className='content-left'><Tabela/></div>
      {/* <Informacoes/> */}
    </div>
  )
}