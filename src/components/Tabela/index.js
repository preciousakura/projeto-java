import React, {useContext, createRef, useMemo} from 'react'
import estado from '../../data/estados.json'
import { Row, Col, Input } from 'antd'
import { UtilContext } from '../../utils/context'
import './style.css'
import tabela from '../../data/data.json'
import { useEffect } from 'react'

export function Tabela() {
  const row_title = { background: '#008192', padding: '7px 0', color: 'white', font: '700 .8rem Nunito', textTransform: 'uppercase'};
  const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
  const col_select = { background: '#c0dbde', color: 'white', font: '700 .8rem Nunito', textTransform: 'uppercase'};
  const col_Unselect = { background: '#f7f7f7', color: '#f1f1f185', font: '700 .8rem Nunito', textTransform: 'uppercase'};
  const cedula = {background: 'rgb(0, 129, 146)', color: 'white', font: '700 .8rem Nunito', textTransform: 'uppercase'}
  const cedula2 = {width: '10rem', background: '#008192', padding: '5px 0', visibility: 'hidden'}
  
  const { selectEstado } = useContext(UtilContext)
  
  const violationRef = useMemo(() => Array(27).fill(0).map(i=> createRef()), []);
  
  useEffect(() => {
    const index = tabela.UF.indexOf(tabela.UF.find((value) => value.nome == selectEstado), 0)
    violationRef[index].current.scrollIntoView({ 
      behavior: 'smooth',
      block: 'end',
      inline: 'center'
    });    
  }, [selectEstado])
  
  return(
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
          {estado.UF.map((estados) => 
            <Col span={3}><div style={row_title}>{estados.sigla}</div></Col>
          )}
        </Row>
        {meses.map((mes) => 
          <Row wrap={false}>
             {/* <Col span={3}><div style={row_title}>{mes}</div></Col> */}
             {tabela.UF.map((valor, index) => 
                <Col ref={violationRef[index]} style={valor.nome.toUpperCase() != selectEstado.toUpperCase() ? col_Unselect : col_select} span={3}>
                  <Input disabled={valor.nome.toUpperCase() != selectEstado.toUpperCase()} bordered={false} defaultValue={(valor.meses.filter(month=> month.mes === mes)[0].value).toLocaleString('pt-BR')} />
                </Col>
             )}
          </Row>
        )}
        </div>
      </div>
      </>
  )}
