import React, { useContext } from 'react';
import { Modal } from 'antd'
import { FaQuestion } from "react-icons/fa";
import { UtilContext } from '../../../utils/context'
import { getExcelFile } from '../../../data/services'

export function SureDownload({setVisible, label, setSuccessVisible}) {

  const { setIsDownload } = useContext(UtilContext)

  function handleDownload() {
    getExcelFile()
    setIsDownload(false)
    setVisible(false)
    setSuccessVisible(true)
  }

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
     <h1>{label}</h1>
     <div className='mod-botao'>
        <div className='b continue' onClick={() => {
          handleDownload()
          }}>
            <span>SIM</span></div>
        <div className='b cancel' onClick={() => setVisible(false)}>
          <span>NÃO</span>
        </div>
     </div>
    </div>
    </Modal>
  )
}