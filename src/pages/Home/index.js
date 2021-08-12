import React, { useContext } from 'react'
import { TabelaResponsiva, Tabela, Selects, Modal } from '../../components'
import { AiOutlineBorderlessTable } from "react-icons/ai";
import { Tooltip } from 'antd'
import { UtilContext } from '../../utils/context'
import { AiOutlineUpload, AiOutlineDownload } from "react-icons/ai";
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
        {width > 500 && (
          <div className="b-icons">
            <span className='title'>
              <Tooltip color={'#202639'} placement="top" title="Carregar Arquivo">
                <AiOutlineUpload/>
              </Tooltip>
            </span>
            <span className='title'>
              <Tooltip color={'#202639'} placement="top" title="Baixar Arquivo">
                <AiOutlineDownload/>
              </Tooltip>
            </span>
          </div>
        )}
        <div className='content-left'>
          {width > 500 ? <Tabela /> : <TabelaResponsiva />}
        </div>
        {width > 500 && (
          <div className="editar">
            <span className='title'>Editar</span>
          </div>
        )}
      </div>
      {modal && (<Modal />)}
    </div>
  </>
  )
}