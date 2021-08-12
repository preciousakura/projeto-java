import React, { useContext } from 'react'
import { Quadrado } from '../Quadrado'
import { UtilContext } from '../../utils/context'
import './style.css'

export function Informacoes() {
    const { selectEstado } = useContext(UtilContext)
    return(
    <>
    <div className="quadrado-title">
        <h1>INFORMAÇÕES DETALHADAS</h1>
        <p>Dados estatísticos dos casos confirmados do estado {selectEstado}</p>
    </div>
    <div className='info-quadrados'>
        <Quadrado nome="Média" number={(101.25).toLocaleString('pt-BR')}/>
        <Quadrado nome="Moda" number={(35285).toLocaleString('pt-BR')}/>
        <Quadrado nome="Desvio Padrão" number={(300.56).toLocaleString('pt-BR')}/>
        <Quadrado nome="Variância" number={(4).toLocaleString('pt-BR')}/>
        <Quadrado nome="Máximo" number={(2582232).toLocaleString('pt-BR')}/>
        <Quadrado nome="Mínimo" number={(0).toLocaleString('pt-BR')}/>
    </div> 
    </>
    )
}