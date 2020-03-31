import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Tiles from '../components/Tiles/Tiles'
import './App.css';

class App extends Component {
  // constructor( props ) {
  //   super( props );
  // }

  /* For now state only has to worry about colors. Later on, difficulty
     will probably be tracked as well */
  state = {
    color: "333333",
    allColors: ["111111", "222222", "333333", "444444", "555555", "666666"]

  }

  render() {
    return (
      <div className="App">
        <Header 
          color={this.state.color}
        />
        <Tiles 
          colors={this.state.allColors}
        />
      </div>
    );
  }

}

export default App;
