import { Component } from 'react';
import Mycars from './component/Mycars';
import './App.css';
import Welcome from './component/Welcome';
import Maman from './component/Maman';
import Form from './component/Form';



class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures'
  }

  render() {
    return (
      <div className='App'>
        <Mycars title={this.state.titre} />
        <Welcome/>
        <Maman/>
        <Form/>
      </div>
    )
  }
}

export default App;