import React, { useContext, useState, useCallback } from 'react'
import { TabelaResponsiva, Tabela, Selects, Modal } from '../../components'
import { getSingleData } from '../../data/services'
import { AiOutlineBorderlessTable } from "react-icons/ai";
import { Sure, Success, Upload, Error, Spin } from '../../components/ModalContent'
import { Tooltip } from 'antd'
import { UtilContext } from '../../utils/context'
import { AiOutlineUpload, AiOutlineDownload } from "react-icons/ai";
import './style.css'

export function Home() {

  const { setModal, modal, width, setDado, selectEstado, dados } = useContext(UtilContext)
  const [upTable, setUpTable] = useState(false)
  const [loadingModal, setLoadingModal] = useState(false)
  
  const attDataSingle = useCallback(() => {
    const response = async () => {
      setLoadingModal(true)
      const data = await getSingleData(selectEstado);
      setDado(data)
      setLoadingModal(false)
    };
    response();
  }, [selectEstado])
  
  
  function current() {
    attDataSingle()
    setModal(!modal)
  }
  
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
            <span className="title" onClick={() => current()}>INFORMAÇÕES DETALHADAS</span>
            <Selects/>
          </div>
        </div>
        {width > 500 && (
          <div className="b-icons">
            <span className='title'>
              <Tooltip color={'#202639'} placement="top" title="Carregar Arquivo">
                <AiOutlineUpload onClick={() => setUpTable(true)}/>
              </Tooltip>
            </span>
            
            {dados?.length > 0 && (<span className='title'>
              <Tooltip color={'#202639'} placement="top" title="Baixar Arquivo">
                <AiOutlineDownload/>
              </Tooltip>
            </span>)}
          </div>
        )}
        <div className='content-left'>
          {width > 500 ? <Tabela /> : <TabelaResponsiva />}
        </div>
      </div>
      {modal && (<Modal loadingModal={loadingModal}/>)}
      {upTable && (<Upload setUpTable={setUpTable}/>)}
    </div>
  </>
  )
}