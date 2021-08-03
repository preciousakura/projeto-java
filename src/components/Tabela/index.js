import React, {useContext, createRef, useState} from 'react'
import estado from '../../data/estados.json'
import { Row, Col, Button, Input } from 'antd'
import { UtilContext } from '../../utils/context'
import './style.css'
import tabela from '../../data/data.json'
import { useEffect } from 'react'

export function Tabela() {
  const row_title = { background: '#008192', padding: '7px 0', color: 'white', font: '700 .8rem Nunito', textTransform: 'uppercase'};
  const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
  const col_select = { background: '#00b0c7', color: 'white', font: '700 .8rem Nunito', textTransform: 'uppercase'};
  const col_Unselect = { background: '#f7f7f7', color: '#008192', font: '700 .8rem Nunito', textTransform: 'uppercase'};
  const { selectEstado } = useContext(UtilContext)
  const especial = { display: 'none'};

  const arrLength = tabela.UF.length;
  const [elRefs, setElRefs] = useState([]);
  
  return(
    <>
    <h1>DADOS CONFIRMADOS DE COVID-19</h1>
      <div className= 'tabela-content'>
        <Row wrap={false}>
          <Col span={4}><div style={especial}>Mês/Estado</div></Col>
          {estado.UF.map((estados) => 
            <Col span={4}><div style={row_title}>{estados.sigla}</div></Col>
          )}
        </Row>
        {meses.map((mes) => 
          <Row wrap={false}>
             <Col span={4}><div style={row_title}>{mes}</div></Col>
             {tabela.UF.map(valor => 
                <Col style={valor.nome.toUpperCase() != selectEstado.toUpperCase() ? col_Unselect : col_select} span={4}><Input disabled={valor.nome.toUpperCase() != selectEstado.toUpperCase()} bordered={false} defaultValue={valor.meses.filter(month=> month.mes === mes)[0].value} /></Col>
             )}
          </Row>
        )}
      </div>
      </>
  )}
