import React from 'react'
import { Quadrado } from '../Quadrado'
import './style.css'

export function Informacoes() {
    return(
    <>
    <div className='info-quadrados'>
        <Quadrado nome="Média" number="500"/>
        <Quadrado nome="Moda" number="500"/>
        <Quadrado nome="Desvio Padrão" number="500"/>
        <Quadrado nome="Variância" number="500"/>
        <Quadrado nome="Máximo" number="500"/>
        <Quadrado nome="Mínimo" number="500"/>
    </div> 
    </>

    )
}