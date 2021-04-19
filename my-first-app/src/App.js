import React, { Component } from 'react';
//import Pokedex from './Pokedex';
import './App.css';
import Pokegame from './Pokegame';

class App extends Component{
  render(){
    return (
    <div className="App">
      <h1>ACTUALIZA PARA QUE SALGAN DIFERENTES POKEMONES :D</h1>
      <Pokegame/>
    </div>
    );
  }
}

export default App;
