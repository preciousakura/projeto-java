import { Tabela } from './components/Tabela'
import { Selects } from './components/Select'
import { Grafico } from './components/Grafico'

function App() {
  return (
    <>
    <script type="text/javascript" src="https://unpkg.com/@ant-design/charts@latest/dist/charts.min.js"></script>
    <script type="text/javascript" src="https://unpkg.com/@ant-design/charts@latest/dist/graphs.min.js"></script>
    <div className='content'>
      <div className='content-left'><Tabela/></div>
      <div className='content-right'><Selects/><Grafico/></div>
    </div>
    </>

  );

}

export default App;
