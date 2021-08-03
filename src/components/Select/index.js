import React, {useContext} from 'react';
import {Select} from 'antd';
import estado from '../../data/estados.json';
import './style.css'
import {UtilContext} from '../../utils/context'
const {Option} = Select

export function Selects() {
    const style = {minWidth: '150px'}
    const {  setselectEstado, setSelectChart } = useContext(UtilContext)
    return(
        <div className='content-select'>
        {/* <Select style={style} onChange={(e) => setSelectChart(e)}>
            <Option value='Barra'>Barra</Option>
            <Option value='Area'>Área</Option>
            <Option value='Pizza'>Pizza</Option>
            <Option value='Linha'>Linha</Option>
            <Option value='Coluna'>Coluna</Option>
        </Select> */}

        <Select showSearch style={style} placeholder="Busque um estado" onChange={(e) => setselectEstado(e)}> 
            {estado.UF.map(estados=>
                <Option value={estados.nome}>{estados.nome}</Option>
                )}
        </Select>
        </div>
    )
}