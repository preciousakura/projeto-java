import React from 'react';
import {Col,Row} from 'antd';
import estados from '../../data/estados.json';
import './style.css';

export function Tabela(){

    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']


    return(
        <>
        <div>
            <Row>
                {estados.UF.map(estado=>
                <Col span={3}>{estado.sigla}</Col>)}
            </Row>
        </div>

        {meses.map(mes=>
        <Row span={3}>{mes}</Row>)}
    
        
        </>
    )
}