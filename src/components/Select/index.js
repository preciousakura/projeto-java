import React, {useContext} from 'react';
import {Select} from 'antd';
import './style.css'
import {UtilContext} from '../../utils/context'
const {Option} = Select

export function Selects() {
    const style = {minWidth: '150px'}
    const {  setselectEstado, dados } = useContext(UtilContext)
    console.log(dados)
    return(
    <>
        <div className='content-select'>
            <Select showSearch style={style} placeholder="Busque um estado" onChange={(e) => setselectEstado(e)}> 
                {dados?.map(estados=>
                    <Option value={estados.nome}>{estados.nome}</Option>
                )}
            </Select>
        </div> 
    </>
    )
}