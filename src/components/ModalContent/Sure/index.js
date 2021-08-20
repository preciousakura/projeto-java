import React, { useContext } from 'react';
import { Modal } from 'antd'
import { FaQuestion } from "react-icons/fa";
import './styles.css'
import { editSingleData } from '../../../data/services'
import { UtilContext } from '../../../utils/context'

export function Sure({setEditTable, editValues}) {

  const { selectEstado, dados } = useContext(UtilContext)

  function handleEditValues() {
    const index = dados?.indexOf(dados?.find((value) => value.nome === selectEstado), 0)
    // console.log(index)
    const dadosMes = dados[index]
    dadosMes.meses.map((element, indexElement) => {
      element.value = editValues[indexElement]
    })
    editSingleData(dadosMes);
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
     <h1>Tem certeza que deseja editar? Essa ação é irreversível</h1>
     <div className='mod-botao'>
      <div className='b continue' onClick={() => handleEditValues()}><span>SIM</span></div>
      <div className='b cancel' onClick={() => setEditTable(false)}><span>NÃO</span></div>
     </div>
    </div>
    </Modal>
  )
}