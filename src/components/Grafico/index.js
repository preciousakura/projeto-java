import React from 'react'
import { Row,Col } from 'antd'
import './style.css'

export function Grafico(){
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