import React from 'react'
import estado from '../../data/estados.json'
import { Row, Col, Input } from 'antd'
import './style.css'

export function Tabela() {
  const row_title = { background: '#ff8f90', padding: '2px 0'};
  const celuda = { background: '#eaeaea', padding: '2px 0'};
  const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

  return(
    <>
    <h1>Dados Covid-19</h1>
      <div className= 'tabela-content'>
        <Row wrap={false}>
          <Col span={4}><div style={row_title}>Mês/Estado</div></Col>
          {estado.UF.map(estados => 
          <Col span={4}><div style={row_title}>{estados.sigla}</div></Col>
          )}
        </Row>
        {meses.map(mes => 
          <Row style={celuda} wrap={false}>
             <Col span={4}><div>{mes}</div></Col>
             {estado.UF.map(valor => 
                <Col span={4}><div><Input defaultValue={0} bordered={false}/></div></Col>
             )}
          </Row>
        )}
      </div>
      </>
  )}
