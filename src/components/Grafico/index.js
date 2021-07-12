import React, {useContext} from 'react'
import { Pie, Area, Column, Bar, Line } from '@ant-design/charts';
import { Row,Col } from 'antd'
import tabela from '../../data/data.json'
import { UtilContext } from '../../utils/context'
import './style.css'

export function Grafico(){
    const { selectEstado, selectChart } = useContext(UtilContext)

    const data = tabela.UF.filter(estado => estado.nome.toUpperCase() === selectEstado.toUpperCase())[0].meses
    const config_pizza = {
        appendPadding: 10,
        data: data,
        angleField: 'value',
        colorField: 'mes',
        radius: 0.8,
        label: {
          type: 'outer',
          content: '{name} {percentage}',
        },
        interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
    }
    
    const config_v = {
        data: data,
        padding: 'auto',
        xField: 'mes',
        yField: 'value',
        xAxis: { tickCount: 5 },
      };

    const config_h = {
        data: data,
        padding: 'auto',
        xField: 'value',
        yField: 'mes',
        xAxis: { tickCount: 5 },
      };
    
    
    return(
        <div className='content-grafico'>
            <div className='grafico'>
                {selectChart.toUpperCase() === "PIZZA" ? <Pie {...config_pizza}/> : 
                 selectChart.toUpperCase() === "AREA" ?  <Area {...config_v} /> :
                 selectChart.toUpperCase() === "BARRA" ?  <Bar {...config_h} /> :
                 selectChart.toUpperCase() === "LINHA" ? <Line {...config_v} /> :
                 selectChart.toUpperCase() === "COLUNA" ?  <Column {...config_v} /> : <></> }
            </div>
            <Row>
                <Col>
                    <h4>Média:</h4>
                    <h4>Moda:</h4>
                    <h4>Máximo da Coluna:</h4>
                </Col>
                <Col offset={5}>
                    <h4>Desvio Padrão:</h4>
                    <h4>Variância:</h4>
                    <h4>Mínimo da Coluna:</h4>
                </Col>
            </Row>
        </div>
    )
}