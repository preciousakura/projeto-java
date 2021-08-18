import React, { useState, useContext } from 'react';
import { Modal, Upload as Up, Spin, message } from 'antd'
import { AiOutlineUpload } from "react-icons/ai";
import { BsTrash } from "react-icons/bs"
import { postFile } from '../../../data/services'
import './styles.css'
import { UtilContext } from '../../../utils/context'
import { LoadingOutlined } from '@ant-design/icons';
const { Dragger } = Up;

export function Upload({setUpTable, setSucess, setError}) {

  const { dados, setDados } = useContext(UtilContext)
  const [loading, setLoading] = useState(false)

  const [file, setFile] = useState()
  const onChange = (e) => {
    setFile(e.file.originFileObj)
  }
  
  function beforeUpload(file) {
  const isXlsx = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    if (!isXlsx) {
      message.error('Por favor, faça o upload de um arquivo XLSX!');
    }
    return isXlsx;
  }
  
  function filPost() {
    if(file) {
      const res = postFile(file)
      res.then(function(result) {
        if(result.status === 200) {
          setDados(result.data)
          setSucess(true)
        } 
        else setError(true)
      });
      setUpTable(false)
    }
  }
  
  return(
    <Modal
      centered
      visible
      width={550}
      cancelText={false}
      okText={false}
      closable={false}
    >
      <Dragger
        maxCount={1}
        onChange={(info) => onChange(info)}
        showUploadList={{
          showDownloadIcon: true,
          showRemoveIcon: true,
          downloadIcon: false,
          removeIcon: <BsTrash onClick={e => console.log(e, 'custom removeIcon event')} />,
        }}
        type="file"
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        beforeUpload={beforeUpload}
      >
        <div className="up-button">
          <AiOutlineUpload/>
          <h1>Arraste e solte o arquivo aqui.</h1>
        </div>
      </Dragger>
      <div className='up-mod'>
        <div className='up-b cancel'><span onClick={() => setUpTable(false)}>CANCELAR</span></div>
        <div className='up-b' onClick={() => filPost()}><span>FAZER UPLOAD</span></div>
      </div>
    </Modal>
  )
}

export default Upload;