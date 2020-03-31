import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Tiles from '../components/Tiles/Tiles'
import './App.css';

class App extends Component {
  // constructor( props ) {
  //   super( props );
  // }

  /* For now state only has to worry about color. Later on, difficulty
     will probably be tracked as well */
  state = {
    color: "333333"
  }

  render() {


    return (
      <div className="App">
        {/* Header component is the top text including the solution color, 
            we pass the solution color here simply to display it */}
        <Header 
          color={this.state.color}
        />

        {/* The Tiles component is the main body of the app, where the 6 
            individual Tile components will be placed. We pass the solution 
            color here as well bc Tiles takes care of the logic to generate
            the 5 other colors, and then create a Tile component for each one */}
        <Tiles 
          solutionColor={this.state.color}
          difficulty="easy"
        />
      </div>
    );
  }

}

export default App;
