import React from 'react';
import { Modal } from 'antd'
import { BiCheckSquare } from "react-icons/bi"
import './styles.css'

export function Success({text, setVisible}) {
  return (
    <Modal
      centered
      visible
      width={363}
      cancelText={false}
      okText={false}
      closable={false}
    >
      <div className='content-mod success'>
        <BiCheckSquare />
        <h1>{text}</h1>
        <div className='mod-botao'>
          <div className ='b continue' onClick={() => setVisible(false)}><span>OK</span></div>
        </div>
     </div>
    </Modal>
  )
}