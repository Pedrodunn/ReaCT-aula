import React from 'react';
import AppStyle from './AppStyle';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Temporizaador React</h1>
        <div>
            <div>00:00</div>
            <div>
                <button>Iniciar</button>
                <button>Zerar</button>
                <button>Registrar</button>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
