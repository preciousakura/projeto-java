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
        color: ['#8D2828', '#D54C4C', '#ECEFA4', '#D9DD6B'],
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
        columnStyle: {
            fill: '#8D2828',
            lineWidth: 1,
            cursor: 'pointer'
        },
        lineStyle: {
            stroke: '#8D2828',
            lineWidth: 1,
            cursor: 'pointer'
        },
        areaStyle: {
            fill: 'l(270) 0:#ffffff 0.5:#D54C4C 1:#8D2828',
            stroke: '#8D2828',
            cursor: 'pointer',
            lineWidth: 1
        },
        color: ['#8D2828']
      };

    const config_h = {
        data: data,
        padding: 'auto',
        xField: 'value',
        yField: 'mes',
        xAxis: { tickCount: 5 },
        barStyle: {
            fill: '#8D2828',
            lineWidth: 1,
            cursor: 'pointer'
        }
        
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