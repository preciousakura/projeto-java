import React from 'react';
import {Select, Button} from 'antd';
import estado from '../../data/estados.json';
import './style.css'
const {Option} = Select

export function Selects(){

    return(
        <div className='content-select'>
        <Select defaultValue="TIPO DE GRÁFICO">
            <Option value='Barra'>Barra</Option>
            <Option value='Pizza'>Pizza</Option>
            <Option value='Linha'>Linha</Option>
            <Option value='Coluna'>Coluna</Option>
        </Select>

        <Select defaultValue="ESTADO">
            {estado.UF.map(estados=>
                <Option value={estados.nome}>{estados.nome}</Option>
                )}
        </Select>
        <Button>GERAR GRÁFICO</Button>
        </div>
    )
}