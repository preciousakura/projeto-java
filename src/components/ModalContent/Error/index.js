import React from 'react';
import { Modal } from 'antd'
import { BiErrorCircle } from "react-icons/bi"
import './styles.css'

export function Error({text, setVisible}) {
  return (
    <Modal
      centered
      visible
      width={363}
      cancelText={false}
      okText={false}
      closable={false}
    >
      <div className='content-mod error'>
        <BiErrorCircle />
        <h1>{text}</h1>
        <div className='mod-botao'>
          <div className='b continue' onClick={() => setVisible(false)}><span>OK</span></div>
        </div>
     </div>
    </Modal>
  )
}