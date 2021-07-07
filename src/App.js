import { Tabela } from './components/Tabela'
import { Selects } from './components/Select'
import { Grafico } from './components/Grafico'

function App() {
  return (
    <>
    <div className='content'>
      <div className='content-left'><Tabela/></div>
      <div className='content-right'><Selects/><Grafico/></div>
    </div>
    </>

  );

}

export default App;
