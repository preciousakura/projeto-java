import React from 'react'
import { Tabela, Selects, Grafico, Informacoes, SelectGrafico } from '../../components'
import { AiOutlineBorderlessTable } from "react-icons/ai";
import './style.css'

export function Home() {
  return(
  <>
    <div className='content'>
      <div className='header'>
        <div>
          <h1> <AiOutlineBorderlessTable/> INFORME-SE</h1>
          <p>Casos de COVID-19 confirmados no ano de 2020. </p>
        </div> 
        <div class="menu">
          <span className="title">CARREGAR PLANILHA</span>
          <span className="title">/</span>
          <span className="title">INFORMAÇÕES DETALHADAS</span>
          <Selects/>
        </div>
      </div>
      <div className='content-left'><Tabela/></div>
    </div>
    
    <div className='modal'>
      <div>
        <div class="title-grafico"><h2>Selecione o tipo de gráfico: </h2><SelectGrafico/></div>
        <Grafico/>
      </div>
      <div><Informacoes/></div>
    </div>
  </>
  )
}