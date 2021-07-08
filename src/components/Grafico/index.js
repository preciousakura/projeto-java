import React from 'react'
import { Row,Col } from 'antd'
import './style.css'

export function Grafico(){
    return(
        <div className='content-grafico'>
            <div className='grafico'></div>
            <Row>
                <Col>
                    <div>Média:</div>
                    <div>Moda:</div>
                    <div>Máximo da Coluna:</div>
                </Col>
                <Col offset={5}>
                    <div>Desvio Padrão:</div>
                    <div>Variância:</div>
                    <div>Mínimo da Coluna:</div>
                </Col>
            </Row>
        </div>
    )
}