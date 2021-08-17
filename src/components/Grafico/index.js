import React, {useContext} from 'react'
import { Pie, Area, Column, Bar, Line } from '@ant-design/charts';
import { UtilContext } from '../../utils/context'
import './style.css'

export function Grafico(){

    const { selectEstado, selectChart, dados } = useContext(UtilContext)

    const data = dados?.filter(estado => estado.nome.toUpperCase() === selectEstado.toUpperCase())[0].meses
    const config_pizza = {
        appendPadding: 10,
        data: data,
        angleField: 'value',
        colorField: 'mes',
        radius: 0.8,
        color: ['#008192', '#ffd15b', '#615284', '#A3D2CA'], 
        label: {
          type: 'outer',
          content: '{name} {percentage}',
        },
        interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
    }
    
    const config_v = {
        data: data,
        padding: 'auto',
        xField: 'mes',
        yField: 'value',
        xAxis: { tickCount: 5 },
        columnStyle: {
            fill: '#ffd15b',
            lineWidth: 1,
            cursor: 'pointer'
        },
        lineStyle: {
            stroke: '#615284',
            lineWidth: 1,
            cursor: 'pointer'
        },
        areaStyle: {
            fill: 'l(270) 0:#615284 0.5:#615284 1:#615284',
            stroke: '#615284',
            cursor: 'pointer',
            lineWidth: 1
        },
        color: ['#615284']
      };

    const config_h = {
        data: data,
        padding: 'auto',
        xField: 'value',
        yField: 'mes',
        xAxis: { tickCount: 5 },
        barStyle: {
            fill: '#A3D2CA',
            lineWidth: 1,
            cursor: 'pointer'
        }

      };
    
    
    return(
        <div className='content-grafico'>
            <div className='grafico'>
                {selectChart.toUpperCase() === "PIZZA" ? <Pie {...config_pizza}/> : 
                 selectChart.toUpperCase() === "AREA" ?  <Area {...config_v} /> :
                 selectChart.toUpperCase() === "BARRA" ?  <Bar {...config_h} /> :
                 selectChart.toUpperCase() === "LINHA" ? <Line {...config_v} /> :
                 selectChart.toUpperCase() === "COLUNA" ?  <Column {...config_v} /> : <></> }
            </div>
        </div>
    )
}