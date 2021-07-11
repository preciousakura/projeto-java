import React from 'react'
import estado from '../../data/estados.json'
import { Row, Col, Button, Input } from 'antd'
import './style.css'
import tabela from '../../data/data.json'

export function Tabela() {
  const row_title = { background: '#8D2828', padding: '2px 0', color: 'white'};
  const meses = ["janeiro", "fevereiro", "marco", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
  const cedulaPar = { background: 'white', padding: '2px 0'};
  const cedulaImpar = { background: '#ECEFA4', padding: '2px 0'};

  return(
    <>
    <h1>DADOS CONFIRMADOS DE COVID-19</h1>
      <div className= 'tabela-content'>
        <Row wrap={false}>
          <Col span={4}><div style={row_title}>Mês/Estado</div></Col>
          {estado.UF.map(estados => 
          <Col span={4}><div style={row_title}>{estados.sigla}</div></Col>
          )}
        </Row>
        {meses.map((mes, index) => 
          <Row style={index%2 === 0 ? cedulaPar: cedulaImpar} wrap={false}>
             <Col span={4}><div>{mes}</div></Col>
             {tabela.UF.map(valor => 
                <Col span={4}><Input bordered={false} defaultValue={String(valor.mes[mes])} /></Col>
             )}
          </Row>
        )}
      </div>
      <div className='alterar'>
        <Button>ALTERAR DADOS</Button>
      </div>
      </>
  )}
