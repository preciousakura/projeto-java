import React from 'react'
import estado from '../../data/estados.json'
import './style.css'

export function Tabela() {
  const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
  const valores = [10, 25, 5, 36, 2, 4, 800, 4555, 4, 7, 5, 2, 10, 25, 5, 36, 2, 4, 800, 4555, 4, 7, 5, 2, 50000, 9521, 2]
  return(
    <>
    <h1>Dados Covid-19</h1>
    <div className= 'tabela-content'>
      <table >
        <tr>
          <th>Mês/Estado</th>
          {estado.UF.map(estados => 
          <th>{estados.sigla}</th>
          )}
        </tr>
        {meses.map(mes => 
          <tr>
             <td>{mes}</td>
             {valores.map(valor => 
                <td>{valor}</td>
             )}
          </tr>
        )}
      </table>
    </div>
    </>
  )
}