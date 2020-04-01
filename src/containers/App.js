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
    colors: [
      [100, 100, 100], // first element of colors is the solution color
      [50, 50, 50],
      [10, 10, 10],
      [50, 10, 50],
      [10, 50, 10],
      [10, 10, 50]
    ],
    diff: 4

  }

  getNewColors = ( diff ) => {
    const getNum = () => Math.floor(Math.random() * 256);
    const getNumWithOffset = ( num, offset ) => {
        let min = num - offset;
        if (min < 0) { min = 0; }
        let max = num + offset;
        if (max > 255) { max = 255; }
        return Math.floor(Math.random() * (max - min) + min);
    }
    const getOffsetFromDiff = diff => {
      if ( diff === 0 ) { return 150; }
      if ( diff === 1 ) { return 100; }
      if ( diff === 2 ) { return 50; }
      if ( diff === 3 ) { return 30; }
      if ( diff === 4 ) { return 15; }
    }
    const getSimilarColor = ( color, diff ) => {
      if (diff === 0) { return [getNum(), getNum(), getNum()]; }

      const offset = getOffsetFromDiff( diff ); // this will be generated using the diff later
      console.log(offset);
      return [getNumWithOffset( color[0], offset ), getNumWithOffset( color[1], offset ), getNumWithOffset( color[2], offset )]
    }

    let color = [getNum(), getNum(), getNum()]; // the solution color
    let colors = [color];
    for (let i = 0; i < 5; i++){
      colors.push(getSimilarColor(color, this.state.diff));
    }


    this.setState({
      colors: colors
    })
  }

  componentDidMount() {
    this.getNewColors( this.state.diff );
  }

  render() {
    return (
      <div className="App">
        <Header 
          color={this.state.colors[0]}
          diff={this.state.diff}
        />
        <Tiles 
          colors={this.state.colors}
        />
      </div>
    );
  }

}

export default App;
