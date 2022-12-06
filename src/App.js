import './App.css';
import { Component } from 'react';
import { List } from './components/List/list';
import { Search } from './components/Search/search';
import { Footer } from './components/Footer/footer';

class App extends Component{

  state = {
    busca: '',
    odas: []
  }


  componentDidMount(){
    this.carregaODAs();
  }

carregaODAs(){
  const {busca} = this.state;
  fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
  .then(response => response.json())
  .then(odas => this.setState({odas}))
}

  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs()
  }

  render(){
    const {busca, odas} = this.state;
    return (
      <section>
          <Search
            busca={this.state.busca}
            buscaODA={this.buscaODA}
          />
          <div className = "posts">
            { odas.map(oda =>(
              <List
              key={oda._id}
              id={oda._id}
              nome={oda.nome}
              usuario={oda.usuario}
              descricao={oda.descricao}
              data_inclusao={oda.data_inclusao}
              palavras_chave={oda.palavras_chave}
              />
            )
          )
        }
        </div>
            <Footer/>
        </section>

    )
  }
}

export default App;
