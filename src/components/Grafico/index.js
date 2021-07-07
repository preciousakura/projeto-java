import React from 'react'
import { Row,Col } from 'antd'

export function Grafico(){
    return(
        <div className='content-grafico'>
            <Row>
                <Col>
                    <div>Média:</div>
                    <div>Moda:</div>
                    <div>Máximo da Coluna:</div>
                </Col>
                <Col offset={1}>
                    <div>Desvio Padrão:</div>
                    <div>Variância:</div>
                    <div>Mínimo da Coluna:</div>
                </Col>
            </Row>
        </div>
    )
}