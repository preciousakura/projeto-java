import React, {useContext, createRef, useMemo, useEffect, useState} from 'react'
import { getData } from '../../data/services'
import estado from '../../data/estados.json'
import { Row, Col, Input } from 'antd'
import { UtilContext } from '../../utils/context'
import { Sure, Success } from '../ModalContent'
import { LoadingOutlined } from '@ant-design/icons';
import './style.css'

export function Tabela() {
  const row_title = { background: '#008192', padding: '7px 0', color: 'white', font: '700 .8rem Nunito', textTransform: 'uppercase'};
  const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
  const col_select = { background: '#c0dbde', color: 'white', font: '700 .8rem Nunito', textTransform: 'uppercase'};
  const col_Unselect = { background: '#f7f7f7', color: '#f1f1f185', font: '700 .8rem Nunito', textTransform: 'uppercase'};
  const cedula = {background: 'rgb(0, 129, 146)', color: 'white', font: '700 .8rem Nunito', textTransform: 'uppercase'}
  const cedula2 = {width: '10rem', background: '#008192', padding: '5px 0', visibility: 'hidden'}
  
  const { selectEstado, width, dados, setDados, setselectEstado } = useContext(UtilContext)
  const [editTable, setEditTable] = useState(false)
  const [confirmEditState, setConfirmEditState] = useState(false)
  const [loading, setLoading] = useState(true)

  const violationRef = useMemo(() => Array(27).fill(0).map(i=> createRef()), []);
  const [currentData, setCurrentData] = useState(undefined);

  useEffect(() => {
  if(dados?.length > 0 && selectEstado) {
      const index = dados?.indexOf(dados?.find((value) => value.nome === selectEstado), 0)
      violationRef[index]?.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'end',
        inline: 'center'
      }); 
      setCurrentData(dados[index])
    }
  }, [selectEstado, violationRef, dados])
  
  useEffect(() => {
    const response = async () => {
      setLoading(true)
      const data = await getData();
      setDados(data)
      setselectEstado(data && data.length > 0 ? data[0].nome : '')
      setLoading(false)
    };
    response();
  }, [setDados, setselectEstado]);

  
  const HandleValue = (e, indexMes, indexDado) => {
    if(currentData) {
      const mes = currentData.meses[indexMes]
      mes.value = Number(e.target.value.replace(/\D/g, ''))
      const old = currentData.meses[indexMes];
      const updated = { ...old, value: mes.value }
      const clone = {...currentData};
      console.log(clone.meses[indexMes])
      clone.meses[indexMes] = updated;
      setCurrentData(clone)
    }
  }
  
  return(
    <>
    {dados?.length > 0 ? 
      <>
        <div className='tabela'>
          <div className='tabela-mes'>
          <Col wrap={false}>
            <div style={cedula2}>limpo</div>
            {meses.map((mes) => 
            <Col style={cedula} span={4}><Input disabled={true} bordered={false} defaultValue={mes} /></Col>    
            )}
          </Col>
          </div>
          <div className='tabela-content'>
        <Row wrap={false}>
          {dados?.map((estados) => 
            <Col span={3}><div style={row_title}>{estado.UF.find((value) => value.nome === estados.nome)?.sigla}</div></Col>
          )}
        </Row>
        {meses.map((mes, indexMes) => 
          <Row wrap={false}>
             {dados?.map((valor, index) => 
                <Col ref={violationRef[index]} style={valor.nome.toUpperCase() !== selectEstado.toUpperCase() ? col_Unselect : col_select} span={3}>
                  {valor.nome.toUpperCase() !== selectEstado.toUpperCase() ? 
                    <Input 
                    disabled={true} 
                    bordered={false} 
                    value={(valor.meses.filter(month=> month.mes === mes)[0].value).toLocaleString('pt-BR')}
                  /> : 
                  <Input 
                  bordered={false} 
                  value={(currentData?.meses[indexMes].value)?.toLocaleString('pt-BR')}
                  onChange={(e) => {
                    HandleValue(e, indexMes, index)
                  }} 
                />
                }
                </Col>
             )}
          </Row>
        )}
        </div>
      </div> 
      {width > 500 && (
          <div className="editar">
            <span className='title' onClick={()=>setEditTable(true)}>Salvar Alterações</span>
          </div>
      )}  
      {editTable && (<Sure currentData={currentData} setEditTable={setEditTable} label={"Tem certeza que deseja editar? Essa ação é irreversível"} setConfirmEditState={setConfirmEditState} />)}
      {confirmEditState && (<Success setVisible={setConfirmEditState} text={"Alterações salvas com sucesso!"} />)}
      </>
      : loading ? 
      <>
        <div className="loading-data">
          <h1>Carregando</h1>
          <LoadingOutlined style={{ fontSize: 30 }} spin />
        </div>
      </> 
      : <div className="no-data"><h1>Nenhum dado encontrado</h1></div>}
      </>
  )}
