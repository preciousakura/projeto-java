import React, { useContext } from 'react'
import { TabelaResponsiva, Tabela, Selects, Modal } from '../../components'
import { AiOutlineBorderlessTable } from "react-icons/ai";
import { UtilContext } from '../../utils/context'
import './style.css'

export function Home() {

  const { setModal, modal, width } = useContext(UtilContext)
  
  return(
  <div className="content-max">
    <div className='content'>
      <div className='header'>
        <div>
          <h1> <AiOutlineBorderlessTable/> INFORME-SE</h1>
          <p>Casos de COVID-19 confirmados no ano de 2020. </p>
        </div> 
        <div class="menu">
          <span className="title">CARREGAR PLANILHA</span>
          <span className="title">/</span>
          <span className="title" onClick={()=>setModal(!modal)}>INFORMAÇÕES DETALHADAS</span>
          <Selects/>
        </div>
      </div>
      <div className='content-left'>{width > 500 ? <Tabela/> : <TabelaResponsiva/>}</div>
    </div>
    {modal && (<Modal />)}
  </div>
  )
}