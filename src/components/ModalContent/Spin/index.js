import React from 'react';
import { Modal } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
import './styles.css'

export function Spin() {
  return (
    <Modal
      centered
      visible
      width={363}
      cancelText={false}
      okText={false}
      closable={false}
    >
      <div className='content-mod spin'>
        <h1>Carregando</h1>
        <LoadingOutlined style={{ fontSize: 60 }} spin />
      </div>
    </Modal>
  )
}