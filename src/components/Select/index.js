import React, {useContext} from 'react';
import {Select} from 'antd';
import estado from '../../data/estados.json';
import './style.css'
import {UtilContext} from '../../utils/context'
const {Option} = Select

export function Selects() {
    const style = {minWidth: '150px'}
    const {  setselectEstado } = useContext(UtilContext)
    return(
        <div className='content-select'>
            <Select showSearch style={style} placeholder="Busque um estado" onChange={(e) => setselectEstado(e)}> 
                {estado.UF.map(estados=>
                    <Option value={estados.nome}>{estados.nome}</Option>
                    )}
            </Select>
        </div>
    )
}