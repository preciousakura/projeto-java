import React, { useContext } from 'react';
import './style.css'
import { Grafico, Informacoes, SelectGrafico } from '../'
import { AiFillCloseCircle } from "react-icons/ai";
import { Tooltip } from 'antd'
import { UtilContext } from '../../utils/context'

export function Modal() {
  const { setModal, modal } = useContext(UtilContext)
  return(
    <div className="content-modal">
      <div className='modal'>
        <div className="close">
          <Tooltip color={'#202639'} placement="leftTop" title="Fechar">
            <AiFillCloseCircle onClick={()=>setModal(!modal)}/>
          </Tooltip>
        </div>
        <div className="comp"> 
          <div class="title-grafico"><h2>Selecione o tipo de gráfico: </h2><SelectGrafico/></div>
          <Grafico/>
        </div>
        <div className="comp"><Informacoes/></div>
      </div>
    </div>
    )
}