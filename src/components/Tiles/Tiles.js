import React from 'react';
import Tile from './Tile/Tile'

const Tiles = props => {
    const colors = [props.solutionColor, 222222, 111111, 444444, 555555, 666666]; // an array containing all the colors, the solution as well as all others
    const generateOtherColors = ( color, difficulty ) => { 
        // takes in solution color and difficulty, generates 5 other similar colors and pushes 
        // them to colors array. 

    }

    return colors.map(( color, index ) => {
        return <Tile 
            color={color}
        />
    }) 
}

export default Tiles;