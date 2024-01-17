import logo from './logo.svg';
import './App.css';

import Topo from './componentes/Topo';
import Conteudo from './componentes/Conteudo';
import Rodape from './componentes/Rodapé';

function App() {
  return (
    <div>
      <Topo/>
      <Conteudo/>
      <Rodape/>
    </div>
  );
}

export default App;
