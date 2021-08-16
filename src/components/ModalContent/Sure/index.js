import React from 'react';
import { Modal } from 'antd'
import { FaQuestion } from "react-icons/fa";
import './styles.css'

export function Sure({setEditTable}) {
  return(
    <Modal
      centered
      visible
      width={363}
      cancelText={false}
      okText={false}
      closable={false}
    >
    <div className='content-mod sure'>
     <FaQuestion/>
     <h1>Tem certeza que deseja editar? Essa ação é irreversível</h1>
     <div className='mod-botao'>
      <div className='b continue'><span>SIM</span></div>
      <div className='b cancel' onClick={() => setEditTable(false)}><span>NÃO</span></div>
     </div>
    </div>
    </Modal>
  )
}