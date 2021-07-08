import React from 'react';
import {Select, Button} from 'antd';
import estado from '../../data/estados.json';
import './style.css'
const {Option} = Select

export function Selects(){

    return(
        <div className='content-select'>
        <Button>ALTERAR COLUNA</Button>
        <Select defaultValue="TIPOS DE GRÁFICO">
            <Option value='Barra'>Barra</Option>
            <Option value='Pizza'>Pizza</Option>
            <Option value='Linha'>Linha</Option>
        </Select>

        <Select defaultValue="ESTADOS">
            {estado.UF.map(estados=>
                <Option value={estados.nome}>{estados.nome}</Option>
                )}
        </Select>
        </div>
    )

}