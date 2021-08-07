import React, { useContext } from 'react'
import { TabelaResponsiva, Tabela, Selects, Modal } from '../../components'
import { AiOutlineBorderlessTable } from "react-icons/ai";
import { UtilContext } from '../../utils/context'
import { Footer } from '../../components/Footer'
import './style.css'

export function Home() {

  const { setModal, modal, width } = useContext(UtilContext)
  
  return (
  <>
    <div className="content-max">
      <div className='content'>
        <div className='header'>
          <div>
            <h1> <AiOutlineBorderlessTable/> INFORME-SE</h1>
            <p>Casos de COVID-19 confirmados no ano de 2020. </p>
          </div> 
          <div className="menu">
            <span className="title" onClick={()=>setModal(!modal)}>INFORMAÇÕES DETALHADAS</span>
            <Selects/>
          </div>
        </div>
          <div className='content-left'>
            {width > 500 ? <Tabela /> : <TabelaResponsiva />}
          </div>
          <div className="header">
            <div className="menu">
              <span className='title' style={{fontSize: "1.125rem"}}>Editar</span>
            </div>
            <div className="menu">
              <span className='title' style={{ fontSize: "1.125rem" }}>Carregar</span>
              <span className='title' style={{ fontSize: "1.125rem" }}>/</span>
              <span className='title' style={{fontSize: "1.125rem"}}>Salvar</span>
            </div>
          </div>
      </div>
      {modal && (<Modal />)}
    </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width:"100%"}}>
      <Footer />
    </div>
  </>
  )
}