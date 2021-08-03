import React, {useContext} from 'react';
import {Select} from 'antd';
import './style.css'
import {UtilContext} from '../../utils/context'
const {Option} = Select

export function SelectGrafico() {
    const style = {minWidth: '150px'}
    const {  selectChart, setSelectChart } = useContext(UtilContext)
    return(
        <div className='content-select'>
        {<Select defaultValue={selectChart} style={style} onChange={(e) => setSelectChart(e)}>
            <Option value='Barra'>Barra</Option>
            <Option value='Area'>Área</Option>
            <Option value='Pizza'>Pizza</Option>
            <Option value='Linha'>Linha</Option>
            <Option value='Coluna'>Coluna</Option>
        </Select>}
        </div>
    )
}