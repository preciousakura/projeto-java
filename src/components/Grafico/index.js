import React from 'react'
import { Column, Line, Pie } from '@ant-design/charts';
import { Row,Col } from 'antd'
import './style.css'

export function Grafico(){

    const data = [
        {mes: "Janeiro", value: 12},
        {mes: "Fevereiro", value: 12},
        {mes: "Março", value: 1},
        {mes: "Abril", value: 45},
        {mes: "Maio", value: 12},
        {mes: "Junho", value: 20},
        {mes: "Julho", value: 50},
        {mes: "Agosto", value: 120},
        {mes: "Setembro", value: 12},
        {mes: "Outubro", value: 51},
        {mes: "Novembro", value: 36},
        {mes: "Dezembro", value: 86},
    ]
    
    var config = {
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
      };

    // const config = {
    //     data,
    //     height: 400,
    //     xField: 'mes',
    //     yField: 'value',
    //     point: {
    //       size: 5,
    //       shape: 'diamond',
    //     },
    //   };
      
    const graficos = {
        Line: <Line {...config} />,
        Coluna: <Column {...config} />,
        Pizza: <Pie {...config} />
    }
    
    return(
        <div className='content-grafico'>
            <div className='grafico'></div>
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