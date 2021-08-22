import React, { useContext } from 'react'
import { Quadrado } from '../Quadrado'
import { UtilContext } from '../../utils/context'
import './style.css'

export function Informacoes() {
    const { selectEstado, dado } = useContext(UtilContext)
    
    console.log("dado", dado)
      
    return(
    <>
    <div className="quadrado-title">
        <h1>INFORMAÇÕES DETALHADAS</h1>
        <p>Dados estatísticos dos casos confirmados do estado {selectEstado}</p>
    </div>
    
    {dado && (    <div className='info-quadrados'>
        <Quadrado nome="Média" number={(dado?.media).toLocaleString('pt-BR')}/>
        <Quadrado nome="Moda" number={(dado?.moda) === -1 ? "Sem moda" : (dado?.moda).toLocaleString('pt-BR')}/>
        <Quadrado nome="Desvio Padrão" number={(dado?.desvio_padrao).toLocaleString('pt-BR')}/>
        <Quadrado nome="Variância" number={(dado?.variancia).toLocaleString('pt-BR')}/>
        <Quadrado nome="Máximo" number={(dado?.max).toLocaleString('pt-BR')}/>
        <Quadrado nome="Mínimo" number={(dado?.min).toLocaleString('pt-BR')}/>
    </div> )}
    </>
    )
}